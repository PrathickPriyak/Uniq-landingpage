# Production Deployment

The application is deployed on the Hostinger KVM at:

- Public IP URL: `http://147.93.96.103`
- App process port: `3000`
- PM2 app name: `uniq-landingpage`
- App directory: `/var/www/uniq-landingpage`

## Server Runtime

The server can run the Next.js production app through Docker or PM2 and exposes it through Nginx:

```bash
docker compose ps
pm2 status uniq-landingpage
systemctl status nginx
```

Nginx proxies public HTTP traffic from port `80` to the app on `127.0.0.1:3000`.
The matching Nginx config is stored in `deploy/nginx/uniq-landingpage.conf`.

The root `Dockerfile` and `docker-compose.yml` are included so Hostinger's Docker Projects panel can build and run the application with one container.

## Cloudflare DNS

Cloudflare Error 1033 means the domain is routed to a Cloudflare Tunnel that is not available.
This app does not require a Cloudflare Tunnel.

In Cloudflare DNS, point the domain to the server instead:

- `A` record: `uniqjobs.in` -> `147.93.96.103`
- `A` record: `www` -> `147.93.96.103`

After DNS changes propagate, `http://uniqjobs.in` and `http://www.uniqjobs.in` will route to the Nginx proxy.
