# Deploy ke Hostinger VPS

Panduan ini untuk Hostinger VPS (akses SSH root, Ubuntu). Aplikasi dijalankan
sebagai proses Node di belakang Nginx sebagai reverse proxy.

Ganti nilai berikut sesuai punyamu:

- `SERVER_IP` — IP VPS dari hPanel
- `creativesupply.id` — domainmu

---

## 1. Siapkan server

Login sebagai root:

```bash
ssh root@SERVER_IP
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

Aktifkan firewall:

```bash
ufw allow OpenSSH
ufw allow 'Nginx Full'
ufw enable
```

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
npm install sharp     # WAJIB: next/image butuh sharp saat produksi
npm run build
```

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

## 6. Arahkan domain

Di pengelola DNS domainmu, buat A record:

| Type | Name | Value       |
| ---- | ---- | ----------- |
| A    | @    | `SERVER_IP` |
| A    | www  | `SERVER_IP` |

Tunggu propagasi (biasanya beberapa menit sampai beberapa jam).

## 7. HTTPS

Setelah DNS mengarah ke VPS:

```bash
sudo apt-get install -y certbot python3-certbot-nginx
sudo certbot --nginx -d creativesupply.id -d www.creativesupply.id
```

Certbot memasang sertifikat dan auto-renew.

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
