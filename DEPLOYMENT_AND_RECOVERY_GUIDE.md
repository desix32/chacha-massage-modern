# Chacha Massage — Deployment Architecture & Disaster Recovery Guide

This document explains everything that has been set up for **[chachamassage.com](https://chachamassage.com)**, how all components fit together, and exactly **how to troubleshoot or completely recover / roll back** if any issues arise in the future.

---

## 1. High-Level Architecture Overview

Your website uses a modern, high-speed, enterprise-grade architecture that costs $0/month in hosting:

```
                      [ Visitors (Mobile / Desktop) ]
                                     │
                                     ▼
        ┌──────────────────────────────────────────────────────────┐
        │                 CLOUDFLARE (Free CDN & DNS)              │
        │  • Manages DNS records                                   │
        │  • Generates automatic SSL (https://) security lock      │
        │  • Caches images globally (edge servers in Bangkok)      │
        │  • Protects against DDoS attacks and spam                │
        └────────────────────────────┬─────────────────────────────┘
                                     │
                                     ▼
        ┌──────────────────────────────────────────────────────────┐
        │                GITHUB PAGES (Free Web Host)              │
        │  • Repository: desix32/chacha-massage-modern             │
        │  • Hosts static HTML, CSS, JavaScript, and Photos        │
        │  • Automated CI/CD: Deploys in ~25 seconds on git push   │
        └──────────────────────────────────────────────────────────┘
                                     ▲
                                     │
        ┌──────────────────────────────────────────────────────────┐
        │                   GODADDY (Domain Registrar)             │
        │  • Where you purchased and legally own chachamassage.com │
        │  • Nameservers delegated to Cloudflare                   │
        └──────────────────────────────────────────────────────────┘
```

---

## 2. Inventory of Accounts & Where Things Live

| Component | Provider | Role | Key Details / Location |
| :--- | :--- | :--- | :--- |
| **Domain Registrar** | **GoDaddy** | Owns the domain name | Domain: `chachamassage.com`<br>Delegated to Cloudflare nameservers |
| **DNS & Security (CDN)** | **Cloudflare** | DNS routing, Caching & SSL | Account email: `Coc5509905@gmail.com`<br>Nameservers:<br>• `danica.ns.cloudflare.com`<br>• `tadeo.ns.cloudflare.com` |
| **Code Repository & Host** | **GitHub** | Web hosting & build automation | Account: `desix32`<br>Repo: `https://github.com/desix32/chacha-massage-modern`<br>Branch: `main` |
| **Local Source Code** | **Your Machine** | Development source files | `C:\Users\home\.gemini\antigravity-ide\scratch\chacha-massage-modern` |
| **Original Legacy Site** | **GoDaddy / Local** | Safe backup of original site | Tag `v1.0.0-baseline-replica` in local folder `chacha-local-site` |

---

## 3. What We Did (Step-by-Step Summary)

1. **Rebuilt Web Application from Scratch**:
   - Built a custom, mobile-first React/TypeScript application with a bespoke **Siam Zen Sanctuary** design (warm linen `#faf7f2`, soft charcoal, terracotta accent, gold trim).
   - Created dynamic duration and price selectors (60m / 90m / 120m) for all 8 signature therapies.
   - Built an interactive 4-Branch explorer covering all Sukhumvit locations (Soi 15 Flagship, Soi 11, Ambassador Hotel, Soi 13).
   - Added a frictionless booking modal and mobile bottom dock with direct WhatsApp dispatch.
2. **Curated & Integrated Drive Photos**:
   - Analyzed 5 photoshoot folders from Google Drive, selected distinct action shots and interior spaces, and saved them to `./images/photoshoot/`.
3. **Fixed Relative Asset Paths for Subpath/Root Compatibility**:
   - Standardized all image paths to relative `./images/...` so they work whether accessed via GitHub Pages subpath or root custom domain.
4. **Connected GitHub Pages to Custom Domain**:
   - Placed a `CNAME` file containing `chachamassage.com` in `public/CNAME`.
   - Updated GitHub Pages settings to bind to `chachamassage.com`.
5. **Configured Cloudflare CDN & DNS**:
   - Pointed root `@` and `www` to `desix32.github.io` with Cloudflare Proxy (Orange Cloud) enabled.
   - Configured SSL/TLS mode to **Full** and enabled **Always Use HTTPS**.
6. **Delegated Nameservers in GoDaddy**:
   - Replaced default GoDaddy nameservers with `danica.ns.cloudflare.com` and `tadeo.ns.cloudflare.com`.

---

## 4. Disaster Recovery & Rollback Procedures

If anything goes wrong, follow the scenario that matches your situation:

### Scenario A: "I want to roll back to the old GoDaddy website immediately"

If you ever need to return 100% to the old GoDaddy website builder site:

1. Log into **[GoDaddy.com](https://www.godaddy.com/)**.
2. Go to **Domain Portfolio** → Click on **`chachamassage.com`** → **DNS**.
3. Scroll down to **Nameservers** → Click **Change Nameservers**.
4. Select **"Use GoDaddy Nameservers (recommended)"** (or manually reset them back to):
   - `ns49.domaincontrol.com`
   - `ns50.domaincontrol.com`
5. Click **Save**.
6. In GoDaddy Website Builder, click **Publish**.
> **Result**: As soon as nameservers switch back to GoDaddy (15-30 min), your domain will immediately display the old GoDaddy website.

---

### Scenario B: "Website shows an SSL / Security / 'Too Many Redirects' Error"

If visitors ever see an SSL error or redirect loop:

1. Log into **[Cloudflare Dashboard](https://dash.cloudflare.com/)** (`Coc5509905@gmail.com`).
2. Click **`chachamassage.com`** → Go to **SSL/TLS** in the left menu.
3. Check the **Encryption Mode**:
   - **Recommended**: Set to **Full**.
   - If you ever see `ERR_TOO_MANY_REDIRECTS`, change it to **Full** (do NOT use *Flexible* if GitHub Pages forces HTTPS).
   - Do NOT set to *Full (Strict)* unless GitHub Pages custom domain certificate is 100% verified.
4. Go to **SSL/TLS** → **Edge Certificates**:
   - Ensure **Always Use HTTPS** is switched **ON**.

---

### Scenario C: "Cloudflare has an issue or I want to bypass Cloudflare"

If you ever want to point GoDaddy directly to GitHub Pages without Cloudflare in between:

1. Log into **GoDaddy** → **DNS**.
2. Reset nameservers back to GoDaddy's default nameservers.
3. Under **DNS Records**, add:
   - **Type A** | Name: `@` | Value: `185.199.108.153`
   - **Type A** | Name: `@` | Value: `185.199.109.153`
   - **Type A** | Name: `@` | Value: `185.199.110.153`
   - **Type A** | Name: `@` | Value: `185.199.111.153`
   - **Type CNAME** | Name: `www` | Value: `desix32.github.io.`

---

### Scenario D: "I updated text/photos, but changes are not visible on the live site"

Because Cloudflare caches website files globally to make the site fast, new updates might take a few minutes to show. To force Cloudflare to fetch the newest version immediately:

1. Log into **[Cloudflare Dashboard](https://dash.cloudflare.com/)**.
2. Click **`chachamassage.com`** → Go to **Caching** in the left menu → **Configuration**.
3. Click the **"Purge Everything"** button.
> **Result**: Cloudflare instantly clears its global cache and pulls the latest build from GitHub Pages.

---

### Scenario E: "GitHub Pages deploy failed or site shows 404"

1. Check your repository Actions at: `https://github.com/desix32/chacha-massage-modern/actions`.
2. Ensure the latest workflow run has a green checkmark `✓`.
3. Check **Settings** → **Pages** on your repository:
   - **Source**: `Deploy from a branch` / `GitHub Actions`.
   - **Custom domain**: Must say `chachamassage.com`.
   - **Enforce HTTPS**: Checked.
4. Ensure the file `public/CNAME` exists in the repo with the exact single line: `chachamassage.com`.

---

## 5. How to Make Future Updates (Cheat Sheet)

All website content is cleanly separated into simple data files:

| What you want to change | File to edit |
| :--- | :--- |
| **Prices & Treatment descriptions** | `src/data/treatments.ts` |
| **Branch addresses, phone numbers, BTS info, maps** | `src/data/branches.ts` |
| **Gallery photos and captions** | `src/components/GalleryLightbox.tsx` |
| **Top navigation and logo** | `src/components/Navbar.tsx` |
| **Colors, fonts, styling** | `src/index.css` |

### Deploying Any Update
Once you edit a file, run these 3 standard commands in PowerShell:
```powershell
git add .
git commit -m "Update prices and branch phone numbers"
git push origin main
```
GitHub Actions will automatically build and publish the changes live within 30 seconds!
