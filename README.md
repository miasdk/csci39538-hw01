Restaurant Website Project
==========================

**Overview**
------------

This project is a simple restaurant website built using **Next.js, TypeScript, and Tailwind CSS**. The website includes multiple pages: a home page, a menu, an about page, a gallery, and a contact page with a form and embedded Google Map.

**Project Features**
--------------------

✅ **File-Based Routing** - Each page is automatically mapped to a route.\
✅ **Responsive Design** - Mobile-friendly layout using Tailwind CSS.\
✅ **Dynamic Menu Page** - Displays food items and prices using TypeScript props.\
✅ **Image Gallery** - A slider showcasing restaurant images.\
✅ **Contact Form** - Includes validation for user input.\
✅ **Google Maps Integration** - Displays the restaurant's location.\
✅ **Reusable Components** - Navigation bar, footer, and other UI elements.

**Project Structure**
---------------------

```
restaurant-website/
│── public/                 # Static assets (images, favicon, etc.)
│── components/             # Reusable UI components
│── pages/                  # Next.js pages (each file = a route)
│── styles/                 # Global CSS and Tailwind configurations
│── tailwind.config.ts      # Tailwind CSS configuration
│── tsconfig.json           # TypeScript configuration
│── next.config.js          # Next.js configuration
│── package.json            # Dependencies and scripts
│── README.md               # Project documentation

```

**Installation & Setup**
------------------------

1.  **Clone the repository**:

    ```
    git clone https://github.com/yourusername/restaurant-website.git
    cd restaurant-website

    ```

2.  **Install dependencies**:

    ```
    npm install

    ```

3.  **Run the development server**:

    ```
    npm run dev

    ```

    Open [http://localhost:3000](http://localhost:3000/) to view in the browser.

**Deployment**
--------------

Deploy your application for free on **Vercel**:

1.  Push your project to GitHub.
2.  Go to [Vercel](https://vercel.com/) and import your GitHub repo.
3.  Deploy the project with default settings.

**Pages & Features**
--------------------

-   **Home Page (`pages/index.tsx`)** - Hero section with restaurant name and tagline.
-   **Menu Page (`pages/menu.tsx`)** - Displays a list of dishes with prices.
-   **About Page (`pages/about.tsx`)** - Story of the restaurant.
-   **Gallery Page (`pages/gallery.tsx`)** - Slider showcasing restaurant images.
-   **Contact Page (`pages/contact.tsx`)** - Includes a contact form and Google Map.
-   **Footer (`components/Footer.tsx`)** - Contains social media links and business hours.

**Technology Stack**
--------------------

-   **Next.js** - React-based framework with SSR & SSG capabilities.
-   **TypeScript** - Ensures type safety and better development experience.
-   **Tailwind CSS** - For rapid and responsive styling.

**Screenshots**
---------------

Include screenshots of the website on mobile and desktop views.

**Contributing**
----------------

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature-name`).
3.  Commit your changes (`git commit -m 'Added feature'`).
4.  Push to the branch (`git push origin feature-name`).
5.  Open a Pull Request.

**License**
-----------

This project is licensed under the **MIT License**.
