# Chacha Massage — Developer & Maintainer Guide
## How to Update the Website Code via GitHub

This guide is for anyone (developers, freelancers, or team members) who wants to update the website, change prices, update phone numbers/photos, or add features.

---

## 1. Quick Summary of How It Works

1. You make changes to the code (either on your computer or directly on GitHub.com).
2. You commit and push your changes to the **`main`** branch.
3. **GitHub Actions** automatically runs a build (`npm run build`) and publishes the site in **~25 seconds**.
4. **Cloudflare** detects the update and serves it live worldwide at **[https://chachamassage.com](https://chachamassage.com)**.

---

## 2. Option A: Editing Directly on GitHub.com (No Software Needed)

If you only need to update prices, phone numbers, or text, you don't even need to install Node.js or Git:

1. Go to: **[https://github.com/desix32/chacha-massage-modern](https://github.com/desix32/chacha-massage-modern)**
2. Navigate to the file you want to change:
   - **Prices & Treatments**: `src/data/treatments.ts`
   - **Branch details & Phone numbers**: `src/data/branches.ts`
   - **Hero headline**: `src/components/Hero.tsx`
3. Click the **Pencil icon** (Edit this file) in the top right.
4. Make your text/price changes.
5. Click the green **"Commit changes..."** button.
6. Type a short note (e.g. `Update Soi 15 phone number`) and click **Commit changes**.
> **Done!** GitHub Actions will automatically rebuild and deploy your changes to `chachamassage.com` within 30 seconds.

---

## 3. Option B: Developing on Your Computer (Full Local Setup)

### Step 1: Prerequisites
Ensure your computer has:
- **Git**: [https://git-scm.com/](https://git-scm.com/)
- **Node.js (v18 or higher)**: [https://nodejs.org/](https://nodejs.org/)

Check by opening Terminal / PowerShell:
```bash
git --version
node -v
npm -v
```

---

### Step 2: Clone the Repository
Clone the project to your local machine:
```bash
git clone https://github.com/desix32/chacha-massage-modern.git
cd chacha-massage-modern
```

---

### Step 3: Install Dependencies
Install all required packages:
```bash
npm install
```

---

### Step 4: Run the Local Development Server
Start the live preview server:
```bash
npm run dev
```
Terminal will output:
```
  VITE v8.3.0  ready in 250 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
```
Open **`http://localhost:5173/`** in your browser. Any edits you make will refresh instantly on your screen (**Hot Module Reload**).

---

## 4. Code Map: Where to Make Common Updates

| What do you want to change? | File to open and edit |
| :--- | :--- |
| **Treatment Prices, Durations, Benefits** | `src/data/treatments.ts` |
| **Branch Addresses, Hours, Phone Numbers, BTS/MRT directions, Google Maps links** | `src/data/branches.ts` |
| **Hero Title, Tagline, Subtitle** | `src/components/Hero.tsx` |
| **Brand Story / Our Heritage section** | `src/components/AboutHeritage.tsx` |
| **Photo Gallery images and captions** | `src/components/GalleryLightbox.tsx` |
| **WhatsApp Booking Modal & Message format** | `src/components/BookingModal.tsx` |
| **Colors, Fonts, Spacing, Theme CSS** | `src/index.css` |
| **Navigation Menu & Header Logo** | `src/components/Navbar.tsx` |

---

## 5. How to Add or Change Photos

1. Put your image file inside the **`public/images/`** folder (e.g. `public/images/new-photo.jpg`).
2. In the code, reference it using a **relative path**:
   ```typescript
   image: "./images/new-photo.jpg"
   ```
> ⚠️ **CRITICAL RULE**: Always start image paths with `./images/...` (with a dot). **Never** start with `/images/...` without a dot, because relative paths are required for GitHub Pages and custom domain subpaths.

---

## 6. Step 5: Test the Build Locally (Sanity Check)

Before pushing, verify that there are no TypeScript or syntax errors:
```bash
npm run build
```
If you see `✓ built in X.XXs`, everything is clean and ready to deploy!

---

## 7. Step 6: Commit and Deploy to Live Website

Run these 3 commands in your terminal:
```bash
# 1. Stage all your changes
git add .

# 2. Commit with a clear message describing what you changed
git commit -m "Update prices for aroma oil therapy and add new salon photo"

# 3. Push to GitHub
git push origin main
```

---

## 8. Verifying Your Deployment

1. Go to: **[https://github.com/desix32/chacha-massage-modern/actions](https://github.com/desix32/chacha-massage-modern/actions)**
2. You will see a workflow named **"Deploy to GitHub Pages"** running.
3. In about **25 to 30 seconds**, it will turn green with a checkmark `✓`.
4. Visit **[https://chachamassage.com](https://chachamassage.com)** to see your updates live!

---

## 9. Troubleshooting Common Issues

### Issue 1: "Changes are pushed, but I don't see them on chachamassage.com"
- **Cause**: Cloudflare edge caching or browser cache.
- **Fix**:
  1. Log into [Cloudflare Dashboard](https://dash.cloudflare.com/) → `chachamassage.com` → **Caching** → **Configuration**.
  2. Click **"Purge Everything"**.
  3. Open `chachamassage.com` in an Incognito window or press `Ctrl + F5`.

### Issue 2: "Git rejected push: Updates were rejected because remote contains work"
- **Cause**: Someone else made an edit directly on GitHub.
- **Fix**: Pull the latest changes first before pushing:
  ```bash
  git pull origin main --rebase
  git push origin main
  ```

### Issue 3: "Permission denied (publickey) or GitHub asks for password"
- **Cause**: GitHub no longer accepts account passwords via command line.
- **Fix**: Use a **Personal Access Token (PAT)** or authenticate using the GitHub CLI:
  ```bash
  gh auth login
  ```
