# Alqutab - تعلم القرآن الكريم أونلاين

A modern, responsive landing page for Alqutab - an online Quran teaching platform built with React, TypeScript, and Vite.

## 🌟 Features

- **Bilingual Support**: Full Arabic and English language support with RTL layout
- **Responsive Design**: Works perfectly on mobile, tablet, and desktop devices
- **Google Forms Integration**: Easy registration for students and teachers
- **Modern UI**: Clean, beautiful interface with smooth animations
- **Fast Performance**: Built with Vite for optimal loading speed
- **HTTPS Enabled**: Secure connection via GitHub Pages

## 🚀 Live Demo

Visit: [https://alqutab.com](https://alqutab.com)

## 🛠️ Technologies Used

- React 18
- TypeScript
- Vite
- CSS3 with animations
- Google Forms for registration
- GitHub Pages for hosting
- GitHub Actions for CI/CD

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/[your-username]/alqutab-react.git
cd alqutab-react
```

2. Install dependencies:
```bash
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## 🔧 Configuration

Edit `src/config.ts` to update:
- Google Forms URLs (student, teacher, contact)
- Social media links
- Counter statistics
- Site branding

## 📝 Deployment

The site automatically deploys to GitHub Pages when you push to the `main` branch.

### Custom Domain Setup

1. The CNAME file in `/public` contains: `alqutab.com`
2. Configure your domain DNS:
   - Add A records pointing to GitHub Pages IPs:
     - 185.199.108.153
     - 185.199.109.153
     - 185.199.110.153
     - 185.199.111.153
   - Or add CNAME record pointing to `[your-username].github.io`

## 🏗️ Project Structure

```
alqutab-react/
├── public/
│   ├── logo.png
│   └── CNAME
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── Counters.tsx
│   │   ├── Features.tsx
│   │   ├── HowItWorks.tsx
│   │   ├── RegistrationForms.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── App.css
│   ├── config.ts
│   └── main.tsx
├── .github/
│   └── workflows/
│       └── deploy.yml
└── package.json
```

## 📄 License

© 2024 Alqutab. All rights reserved.

## 👥 Contact

- Facebook: [Alqutab](https://www.facebook.com/profile.php?id=100064764068482)
- LinkedIn: [Alqutab](https://www.linkedin.com/company/75472554)
- YouTube: [@_alkutab6780](https://www.youtube.com/@_alkutab6780)

---

Built with ❤️ for Quran education