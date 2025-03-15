# Restaurant Website Project

## Overview

This project is a modern, responsive restaurant website built using **Next.js**, **React (Vite)**, **TypeScript**, and **Tailwind CSS**. The website features multiple pages, including a home page, menu, about section, image gallery, and a contact page with an integrated form and Google Maps location. 

## Features

1. Responsive Design
2. Dynamic Menu Page
3. Image Gallery
4. Contact Form with Validation
5. Google Maps Integration
6. Reusable Components

## Project Structure

```
restaurant-website/

│── public/                 # Static assets (images, favicon, etc.)

│── src/

│   ├── assets/             # Images and static files

│   ├── components/         # Reusable UI components (e.g., Navbar, Footer)

│   ├── pages/              # Page components (Home, Menu, About, etc.)

│   ├── App.tsx             # Main application component

│   ├── main.tsx            # Entry point

│   ├── index.css           # Global styles with Tailwind CSS

│── tailwind.config.ts      # Tailwind CSS configuration

│── tsconfig.json           # TypeScript configuration

│── vite.config.ts          # Vite configuration

│── package.json            # Dependencies and scripts

│── README.md               # Project documentation

```

---

## Deployment

The application is deployed on **Vercel**, providing fast and reliable hosting with automatic CI/CD integration.  

**Live Demo:** *In progress*

---

## Pages & Features

### **Home Page (`src/pages/Home.tsx`)**  

- Hero section with the restaurant's name, tagline, and a call-to-action button.  

- Highlights key offerings or promotions.

### **Menu Page (`src/pages/Menu.tsx`)**  

- Displays a curated list of dishes, complete with descriptions and prices.  

- Built with dynamic data rendering using TypeScript props.

### **About Page (`src/pages/About.tsx`)**  

- Tells the story of the restaurant, its history, and its mission.  

- Includes engaging visuals and text.

### **Gallery Page (`src/pages/Gallery.tsx`)**  

- Features an interactive image slider showcasing the restaurant's ambiance, dishes, and events.

### **Contact Page (`src/pages/Contact.tsx`)**  

- Includes a fully functional contact form with validation for name, email, and message fields.  

- Embedded Google Map for easy location access.

### **Footer (`src/components/Footer.tsx`)**  

- Contains essential links, social media icons, and business hours.  

- Designed to be consistent across all pages.

---

## Technology Stack

- **React (Vite)**: A fast and modern front-end framework for building user interfaces.  

- **TypeScript**: Adds type safety and improves code maintainability.  

- **Tailwind CSS**: A utility-first CSS framework for rapid and responsive styling.  

- **Vercel**: For seamless deployment and hosting.

---

## Learning Objectives: 

1\. **React Basics**: Components, props, state, and hooks.  

2\. **TypeScript with React**: Type interfaces, props, and hooks for enhanced development.  

3\. **Vite**: Understanding its fast development environment and build optimizations.  

4\. **Tailwind CSS**: Utility-first CSS for responsive and modern designs.  

5\. **Project Structuring**: Organizing components, pages, and assets for scalability.  

6\. **Building with Next.js**

7\. **Deployment**: Hosting the project on Vercel with CI/CD integration.

---

## License

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it as needed.

---
