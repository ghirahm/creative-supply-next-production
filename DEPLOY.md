# Deploy ke Hostinger VPS

Panduan ini untuk Hostinger VPS (akses SSH root, Ubuntu). Aplikasi dijalankan
sebagai proses Node di belakang Nginx sebagai reverse proxy.

## Kondisi terverifikasi (28 Juli 2026)

Nilai di bawah ini bukan asumsi — sudah dicek langsung terhadap server dan DNS:

| Hal | Nilai |
| --- | --- |
| IP VPS | `187.77.114.228` (rDNS `srv1623051.hstgr.cloud`, netname `HOSTINGER-HOSTING`) |
| **Port SSH** | **2222** — bukan 22 |
| Autentikasi SSH | **publickey saja**, password dinonaktifkan |
| DNS domain | dikelola **Cloudflare** (`justin.ns` / `haley.ns.cloudflare.com`), bukan Hostinger |
| A record saat ini | menunjuk ke IP proxy Cloudflare, mengembalikan 404 kosong |
| MX | Google Workspace — **jangan diubah**, email akan mati |

> ⚠️ **Port SSH 2222, bukan 22.** Ini penting untuk langkah firewall di bawah:
> mengaktifkan `ufw` dengan aturan `OpenSSH` (port 22) saat SSH sebenarnya di
> 2222 akan **mengunci kamu keluar dari server**.

---

## 1. Siapkan server

Login sebagai root:

```bash
ssh -p 2222 root@187.77.114.228
```

Buat user non-root (jangan jalankan aplikasi sebagai root):

```bash
adduser deploy
usermod -aG sudo deploy
```

Install Node.js 22 LTS, Nginx, dan Git:

```bash
curl -fsSL https://deb.nodesource.com/setup_22.x | bash -
apt-get install -y nodejs nginx git
node -v   # pastikan v22.x
```

Aktifkan firewall. Perhatikan port **2222**, bukan `OpenSSH`/22 — salah di sini
berarti terkunci keluar dan harus lewat konsol pemulihan hPanel:

```bash
ufw allow 2222/tcp comment 'SSH'
ufw allow 'Nginx Full'
ufw --force enable
ufw status verbose        # WAJIB dicek: pastikan 2222/tcp ALLOW muncul
```

Sebelum menutup sesi SSH-mu, buka terminal **kedua** dan pastikan masih bisa
masuk. Kalau gagal, sesi pertama yang masih hidup adalah satu-satunya jalan
memperbaikinya (`ufw disable`).

## 2. Ambil kode

```bash
su - deploy
git clone https://github.com/ghirahm/creative-supply-next-production.git app
cd app
```

> Repo ini besar (~465 MB history karena aset ikut ter-commit). Kalau clone
> lambat atau VPS-nya pas-pasan, pakai shallow clone:
> `git clone --depth 1 https://github.com/...`

## 3. Build

```bash
npm ci
npm run build
```

> `next/image` butuh `sharp` untuk optimasi gambar di produksi, tapi Next 15.2.1
> sudah mencantumkannya sebagai `optionalDependency`, jadi `npm ci` biasa sudah
> memasangnya. Kamu hanya perlu `npm install sharp` manual kalau menjalankan
> `npm ci --omit=optional`.

Kalau build gagal karena OOM (VPS RAM kecil), tambah swap sementara:

```bash
sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile
sudo mkswap /swapfile && sudo swapon /swapfile
```

## 4. Jalankan dengan PM2

```bash
sudo npm install -g pm2
pm2 start npm --name creative-supply -- start
pm2 save
sudo env PATH=$PATH pm2 startup systemd -u deploy --hp /home/deploy
```

Cek jalan atau tidak:

```bash
curl -I http://localhost:3000
pm2 logs creative-supply
```

## 5. Nginx reverse proxy

Buat `/etc/nginx/sites-available/creative-supply`:

```nginx
server {
    listen 80;
    server_name creativesupply.id www.creativesupply.id;

    # Aset di repo ini besar (GIF sampai 32 MB, video 61 MB)
    client_max_body_size 20M;

    location / {
        proxy_pass http://127.0.0.1:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Aktifkan:

```bash
sudo ln -s /etc/nginx/sites-available/creative-supply /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t && sudo systemctl reload nginx
```

## 6. Arahkan domain (di Cloudflare, bukan hPanel)

DNS `creativesupply.id` dikelola Cloudflare, jadi perubahan dilakukan di
dashboard Cloudflare. Mengubahnya di hPanel tidak akan berpengaruh.

Buka **dash.cloudflare.com → creativesupply.id → DNS → Records**, lalu arahkan
kedua record ini ke IP VPS:

| Type | Name | Content           | Proxy status                    |
| ---- | ---- | ----------------- | ------------------------------- |
| A    | @    | `187.77.114.228`  | **DNS only** (awan kelabu) |
| A    | www  | `187.77.114.228`  | **DNS only** (awan kelabu) |

> **Matikan proxy dulu (awan kelabu).** Certbot memverifikasi kepemilikan
> domain lewat HTTP, dan proxy Cloudflare yang aktif sering membuat langkah itu
> gagal atau menimbulkan redirect loop kalau mode SSL-nya masih `Flexible`.
> Nyalakan proxy setelah sertifikat terpasang, lihat langkah 8.

**Jangan sentuh record MX.** Email `@creativesupply.id` berjalan di Google
Workspace; mengubah MX akan mematikan email masuk.

Cek propagasi sebelum lanjut:

```bash
dig +short A creativesupply.id      # harus mengembalikan 187.77.114.228
```

## 7. HTTPS

Jalankan hanya setelah `dig` di atas benar-benar mengembalikan IP VPS:

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d creativesupply.id -d www.creativesupply.id
```

Certbot memasang sertifikat dan mengurus auto-renew.

## 8. Menyalakan kembali proxy Cloudflare (opsional)

Setelah sertifikat aktif, kamu boleh menyalakan proxy (awan jingga) untuk CDN
dan perlindungan DDoS. Kalau ya, **wajib** set mode SSL-nya dengan benar:

**SSL/TLS → Overview → Full (strict)**

Jangan pakai `Flexible`: Cloudflare akan menghubungi origin lewat HTTP biasa
sementara Nginx mengalihkan ke HTTPS, dan hasilnya redirect loop tak berujung.

Catatan renewal: dengan proxy aktif, certbot tetap bisa memperbarui sertifikat
lewat webroot, tapi kalau suatu saat gagal, matikan proxy sebentar saat renewal
atau pindah ke metode DNS-01.

---

## Update setelah ada perubahan kode

```bash
cd ~/app
git pull
npm ci
npm run build
pm2 reload creative-supply
```

---

## Yang masih perlu dikerjakan

- `src/config/site.ts` — isi URL Instagram/Facebook/dll. Ikon sosial media
  hanya tampil untuk entri yang sudah diisi, jadi selama kosong tidak ada
  link mati yang ter-publish. Sesuaikan juga `mapQuery` ke alamat kantor asli.
- Kompres aset. `src/assets` 389 MB dan `public/video.mp4` 61 MB. Ini yang
  paling menentukan situs kepakai atau tidak di HP:
  ```bash
  # GIF -> MP4 (bisa turun ~95%)
  ffmpeg -i content-1.gif -vcodec libx264 -crf 28 -pix_fmt yuv420p content-1.mp4
  # PNG -> WebP
  cwebp -q 80 7_1.png -o 7_1.webp
  # Kompres video hero
  ffmpeg -i video.mp4 -vcodec libx264 -crf 30 -vf scale=1280:-2 -an video-web.mp4
  ```
- Halaman Privacy Policy / Terms. Kolom footer yang menautkannya sudah
  dihapus sementara karena halamannya belum ada.
- Buat Open Graph image (`/opengraph-image.png`, 1200x630) supaya tampilan
  share di WhatsApp/LinkedIn rapi.
