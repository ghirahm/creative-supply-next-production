# Deploy ke Hostinger VPS (Traefik + Docker)

Panduan ini menggambarkan arsitektur yang **benar-benar berjalan** di server
produksi. Pendekatan lama (Nginx + proses Node di host) sudah tidak dipakai —
**jangan install Nginx di server ini**, port 80/443 dipegang Traefik.

## Arsitektur (terverifikasi 28 Juli 2026)

```
Pengunjung
   │  HTTPS
   ▼
Cloudflare (proxy, anti-DDoS, bot filter, WAF, cache)
   │  HTTPS — Origin Certificate (Full strict), hanya IP Cloudflare yang diizinkan firewall
   ▼
Traefik v2.11 (container, port 80/443)
   │  redirect HTTP→HTTPS, rate-limit, security headers, www→apex
   ▼
website (container Next.js standalone, non-root, port internal 3000)
```

| Hal | Nilai |
| --- | --- |
| IP VPS | `187.77.114.228` (Hostinger, `srv1623051`) |
| **Port SSH** | **2222** — bukan 22, **hanya SSH key** (password & root login mati) |
| DNS | Cloudflare (`haley.ns` / `justin.ns`), SSL mode **Full (strict)** |
| MX | Google Workspace — **jangan diubah**, email akan mati |
| Firewall | UFW default deny; 80/443 hanya dari IP Cloudflare (INPUT + chain `DOCKER-USER` di `/etc/ufw/after.rules` & `after6.rules`); 2222 terbuka; fail2ban aktif |
| Traefik | `~/apps/traefik/` — compose, network eksternal `proxy`, dashboard mati, Origin Cert Cloudflare (exp 2041) sebagai default cert di `certs/` |
| Website | `~/apps/website/` — repo ini, container `website`, build multi-stage standalone |

## Deploy rutin (update biasa)

Dari mesin development:

```bash
git push origin main
```

Di VPS (SSH sebagai `ghirah`, port 2222):

```bash
cd ~/apps/website
git pull --ff-only origin main
docker compose up -d --build
```

Verifikasi:

```bash
docker ps                                   # container website: Up
docker logs website --tail 20               # "Ready in ..." tanpa error
curl -s -o /dev/null -w "%{http_code}\n" https://creativesupply.id/   # 200
```

## Catatan penting

- `next.config.ts` **wajib** memuat `output: "standalone"` — Dockerfile
  menyalin `.next/standalone`. Tanpa ini build container gagal.
- Router Traefik memakai `tls=true` (Origin Certificate default), **bukan**
  certresolver Let's Encrypt — ACME HTTP-01 tidak andal di belakang proxy
  Cloudflare dan tidak diperlukan.
- `www.creativesupply.id` di-301 ke apex oleh middleware `www-redirect`
  (label di `docker-compose.yml`).
- Middleware `rate-limit` dan `security-headers` didefinisikan di
  `~/apps/traefik/config/dynamic.yml` (file provider).
- Jika SSH tiba-tiba **connection refused**: kemungkinan fail2ban mem-ban
  IP-mu. Buka web console hPanel lalu:
  `fail2ban-client set sshd unbanip <ip-mu>`.
- Daftar IP Cloudflare di firewall perlu di-refresh sesekali
  (sumber: `https://www.cloudflare.com/ips-v4` dan `/ips-v6`).
- Rollback cepat: `git log --oneline` → `git checkout <commit-sebelumnya>` →
  `docker compose up -d --build` (lalu kembali ke `main` setelah beres).
