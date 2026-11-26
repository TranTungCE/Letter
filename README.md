# Love Date Invitation ♡

A romantic, frontend-only **Love Date Invitation** website built with **React + Vite**. Designed like a modern love letter with soft pastel pink & cream tones, smooth animations, a live countdown, and playful RSVP buttons.

## Quick Start

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

## Customize Your Invitation

All text, names, dates, and venue details are centralized in `src/config.js`:

- `recipientName`: Tên người nhận
- `date`: Ngày giờ hẹn chuẩn ISO (`YYYY-MM-DDTHH:mm:ss`) cho bộ đếm ngược
- `displayDate`, `displayTime`, `place`, `dressCode`: Thông tin hiển thị trong thẻ **OUR LITTLE DATE**
- `letterBody`, `letterQuestion`: Nội dung lá thư

## Deploy to GitHub Pages

1. Push this repository to GitHub (branch `main`).
2. Go to **Settings → Pages** in your GitHub repository.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. The included `.github/workflows/deploy.yml` workflow will automatically build and deploy your site on every push to `main`.
