# Portfolio Website - Astro + React + Svelte

This is a modern portfolio website built with **Astro**, featuring a hybrid approach using both **React** and **Svelte** components.

## 🚀 Tech Stack

- **Astro** - Static site generator
- **React** - For existing components (preserved from Next.js)
- **Svelte** - For new components and functionality
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animations
- **React Icons** - Icon library

## 🏗️ Project Structure

```
src/
├── components/          # React and Svelte components
│   ├── *.tsx           # React components (preserved)
│   ├── *.svelte        # Svelte components (new)
│   └── ...
├── context/            # React context providers
├── lib/                # Utilities and data
├── actions/            # Server actions
├── layouts/            # Astro layouts
├── pages/              # Astro pages
└── styles/             # Global styles
```

## 🎯 Features

- **Hybrid Component Architecture**: Uses React for existing components and Svelte for new features
- **Dark/Light Theme**: Implemented with Svelte for better performance
- **Responsive Design**: Mobile-first approach
- **Smooth Animations**: Powered by Framer Motion
- **Static Generation**: Fast loading with Astro's static output
- **TypeScript**: Full type safety across the stack

## 🛠️ Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## 🔄 Migration Notes

This project was converted from Next.js to Astro while preserving:

- ✅ All existing React components
- ✅ State management with React Context
- ✅ Styling with Tailwind CSS
- ✅ Animations with Framer Motion
- ✅ TypeScript configuration

### New Svelte Components

- `ThemeToggle.svelte` - Dark/light theme switcher
- `Counter.svelte` - Demo Svelte component

## 📝 Notes

- The build includes some warnings about chunk sizes, which is normal for a portfolio site
- React Icons has a module resolution warning but doesn't affect functionality
- All components are properly hydrated with `client:load` directive

## 🎨 Customization

- Modify `src/lib/data.ts` to update content
- Add new Svelte components in `src/components/`
- Update styles in `src/styles/globals.css`
- Configure Astro in `astro.config.mjs`
