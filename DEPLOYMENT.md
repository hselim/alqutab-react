# 🚀 Deployment Instructions for Alqutab

## Step 1: Create GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right → "New repository"
3. Repository settings:
   - Name: `alqutab-react` (or `alqutab`)
   - Make it **Public** (required for free GitHub Pages)
   - Don't initialize with README (we already have one)
   - Click "Create repository"

## Step 2: Push to GitHub

After creating the repository, run these commands in your terminal:

```bash
cd /home/hselim/projects/alqutab-react

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/alqutab-react.git

# Push your code
git push -u origin main
```

Replace `YOUR_USERNAME` with your actual GitHub username.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Build and deployment":
   - Source: Select "GitHub Actions"
5. The workflow will automatically run when you push

## Step 4: Configure Custom Domain (alqutab.com)

### On GitHub:
1. In repository Settings → Pages
2. Under "Custom domain", enter: `alqutab.com`
3. Click "Save"
4. Check "Enforce HTTPS" (may take a few minutes to be available)

### On Your Domain Provider (e.g., GoDaddy, Namecheap):

#### Option A: Using A Records (Recommended)
Add these A records to your domain's DNS:
- Type: A, Host: @, Points to: 185.199.108.153
- Type: A, Host: @, Points to: 185.199.109.153
- Type: A, Host: @, Points to: 185.199.110.153
- Type: A, Host: @, Points to: 185.199.111.153

#### Option B: Using CNAME (if subdomain)
- Type: CNAME, Host: www, Points to: YOUR_USERNAME.github.io

### DNS Propagation
- DNS changes can take 24-48 hours to propagate
- You can check status at: https://www.whatsmydns.net/

## Step 5: Verify Deployment

1. Check GitHub Actions:
   - Go to "Actions" tab in your repository
   - You should see the deployment workflow running
   - Green checkmark = successful deployment

2. Access your site:
   - GitHub Pages URL: `https://YOUR_USERNAME.github.io/alqutab-react`
   - Custom domain: `https://alqutab.com` (after DNS propagation)

## 🔄 Future Updates

To update your site:

1. Make changes locally
2. Test: `npm run dev`
3. Build: `npm run build`
4. Commit and push:
```bash
git add .
git commit -m "Your update message"
git push
```

GitHub Actions will automatically rebuild and deploy!

## 📝 Important Notes

- ✅ Your site will have **FREE HTTPS** automatically
- ✅ **No hosting costs** - GitHub Pages is free for public repos
- ✅ **Automatic deployments** on every push to main branch
- ✅ **Fast CDN** - GitHub Pages uses Fastly CDN
- ✅ **99.9% uptime** guaranteed by GitHub

## 🆘 Troubleshooting

### Site not loading?
- Check Actions tab for build errors
- Verify DNS settings are correct
- Wait for DNS propagation (up to 48 hours)
- Clear browser cache

### Forms not working?
- Google Forms links are embedded correctly
- Check browser console for errors
- Ensure forms are set to "Anyone can respond"

### Custom domain issues?
- Verify CNAME file exists in /public
- Check DNS records are correct
- GitHub Pages settings show domain as verified
- HTTPS certificate may take 15 minutes to provision

## 📞 Support Resources

- GitHub Pages Docs: https://docs.github.com/en/pages
- DNS Help: https://docs.github.com/en/pages/configuring-a-custom-domain
- Google Forms: https://support.google.com/docs/answer/6281888

---

Good luck with your deployment! 🎉