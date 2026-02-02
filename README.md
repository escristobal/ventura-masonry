# Ventura Masonry Website

This repository contains the source code for the **Ventura Masonry LLC** website.  
The site is built as a small business portfolio to showcase completed masonry projects and allow customers to contact the business directly.

This project is intended for **internal use and maintenance**, not as a public open-source library.

---

## Purpose

The website was created to:
- Display masonry and hardscape work through an image gallery
- Provide business contact information in one place
- Allow customers to submit inquiries through a contact form
- Serve as the official online presence for Ventura Masonry LLC

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- EmailJS (contact form email delivery)
- Vercel (deployment)

---

## Features

- Image gallery with modal view
- Contact form with automated email delivery
- Responsive design for mobile and desktop
- Click-to-call phone links
- Easily updatable images and content

---

## Project Structure

```text
ventura-masonry/
├─ public/
│  └─ gallery/           # Gallery images
├─ src/
│  ├─ components/        # React components
│  ├─ App.tsx            # Main app component
│  ├─ main.tsx           # Application entry point
├─ index.html
├─ package.json
├─ tsconfig.json
└─ vite.config.ts

```


---

## Environment Variables

To send emails from the contact form, add a `.env` file in the root:
```bash
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

```

Important:
* The .env file must remain private
* Do not commit it to GitHub
* Add .env to .gitignore
* These same values must be added in your deployment platform’s environment settings

---

## Installation

1. Clone the repo:

```bash

> git clone https://github.com/<your-username>/ventura-masonry.git
> cd ventura-masonry
```

Start the development server:
```bash
> npm run dev
```

Open http://localhost:5173 in your browser.

---

## Development notes

* Images must be placed in public/gallery
* Restart the dev server after modifying environment variables
* Pushing changes to the main branch triggers automatic redeployment on Vercel

---

## Maintenance
This project is maintained to support the Ventura Masonry business website.
Most updates involve changing images, text content, or contact details rather than application logic.

