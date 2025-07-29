# Fametonic Frontend – Home Page Implementation

This project is a custom homepage implementation for **Fametonic**, built with [Next.js](https://nextjs.org) and styled using [Tailwind CSS](https://tailwindcss.com). It features a modern, responsive design with custom theming and assets.

## Features
- ⚡ Built with Next.js 15 (App Router)
- 🎨 Styled using Tailwind CSS 4 with custom colors, fonts, and shadows
- 🖼️ Uses custom assets (logo, phone mockup) in the `public/` directory
- 🌗 Custom global theme and font setup (Geist font)
- 📁 Organized file structure for easy customization

## Getting Started

### 1. Install Dependencies

This project uses **npm** (see `package-lock.json`). Run:

```bash
npm install
```

### 2. Run the Development Server

```bash
npm run dev
```

The app will be available at [http://localhost:3000](http://localhost:3000).

### 3. Build for Production

```bash
npm run build
npm start
```

## File Structure & Customization

- **Main Page:** `src/app/page.tsx`  
  Edit this file to change the homepage content and layout.
- **Global Styles:** `src/app/globals.css`  
  Tailwind CSS is imported here. You can add or override global styles.
- **Layout & Fonts:** `src/app/layout.tsx`  
  Sets up the Geist font and page metadata.
- **Tailwind Config:** `tailwind.config.js`  
  Customize theme colors, fonts, and more here.
- **Assets:** `public/`  
  Replace `logo.png`, `phone.png`, etc. with your own images as needed.

## Custom Theming
- Colors like `fametonicPink`, `fametonicBlue`, etc. are defined in `tailwind.config.js`.
- The default font is Geist (Google Fonts), set up in `layout.tsx` and used in Tailwind's `fontFamily`.
- CSS variables for background/foreground are in `globals.css`.


