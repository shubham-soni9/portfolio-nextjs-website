# Shubham Soni - Personal Portfolio Website

A modern, minimalistic, and responsive personal portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. This project showcases my experience, projects, and skills as an Android Developer, featuring a clean design and a working contact form.

![Hero Section](./public/samples/hero-section.avif)

## 🚀 Features

*   **Modern Tech Stack**: Built with Next.js 15 (App Router), TypeScript, and Tailwind CSS.
*   **Responsive Design**: Fully responsive layout that looks great on mobile, tablet, and desktop devices.
*   **Dark Mode**: Built-in dark/light mode toggle with system preference detection.
*   **Animations**: Smooth scrolling and reveal animations for a polished user experience.
*   **Email Integration**: Functional contact form powered by [Resend](https://resend.com) and React Email.
*   **Type Safety**: Written in TypeScript for robust and maintainable code.
*   **Performance**: Optimized for speed and SEO using Next.js best practices.

## 🛠️ Tech Stack

*   **Framework**: [Next.js 15](https://nextjs.org/)
*   **Language**: [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **Icons**: [React Icons](https://react-icons.github.io/react-icons/) & [Lucide React](https://lucide.dev/)
*   **Email**: [Resend](https://resend.com) & [React Email](https://react.email/)
*   **Toast Notifications**: [React Hot Toast](https://react-hot-toast.com/)
*   **Linting**: ESLint

## 📸 Screenshots

### Projects Section
![Projects Section](./public/samples/projects-section.avif)

## 📂 Project Structure

```bash
portfolio-website/
├── actions/             # Server actions (e.g., sendEmail)
├── app/                 # Next.js App Router pages and layout
├── components/          # Reusable UI components
├── context/             # React Context providers (Theme, ActiveSection)
├── email/               # React Email templates
├── lib/                 # Utility functions, types, and data
├── public/              # Static assets (images, samples)
└── ...config files      # Tailwind, Next.js, TypeScript configs
```

## ⚡️ Getting Started

Follow these steps to set up the project locally on your machine.

### Prerequisites

*   [Node.js](https://nodejs.org/) (v18 or higher)
*   [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/portfolio-website.git
    cd portfolio-website
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    # or
    pnpm install
    # or
    yarn install
    ```

3.  **Set up Environment Variables:**

    Create a `.env.local` file in the root directory and add your Resend API key (for the contact form):

    ```bash
    RESEND_API_KEY=re_123456789
    ```

    > **Note:** You can get an API key by signing up at [Resend](https://resend.com).

4.  **Run the development server:**

    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 Customization

You can easily customize this portfolio with your own data:

1.  **Update Data**: Modify `lib/data.ts` to update your links, experience, projects, and skills.
2.  **Images**: Replace the images in the `public` folder with your own assets.
3.  **Personal Details**: Update the `components/intro.tsx` and other components to match your personal details.

## 🚀 Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## 🤝 Contributing

Contributions are welcome! If you'd like to improve this project, please follow these steps:

1.  Fork the repository.
2.  Create a new branch (`git checkout -b feature/YourFeature`).
3.  Commit your changes (`git commit -m 'Add some feature'`).
4.  Push to the branch (`git push origin feature/YourFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
