# Technical Architecture Document - Personal Job-Seeking Website

## 1. High-Level Architecture
The website will be a single-page application (SPA) with React, styled using Tailwind CSS, and built with Vite. It will be hosted on GitHub Pages.

## 2. Technology Stack
- **Frontend**: React (with TypeScript)
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide-react
- **State Management**: Zustand (if needed, but SPA with minimal state might not require it)
- **Deployment**: GitHub Pages

## 3. Component Architecture
- **Layout**: Main wrapper with responsive navigation and footer.
- **Components**:
  - `Navbar`: Responsive navigation bar.
  - `Hero`: Home / Headline section.
  - `About`: About Me section.
  - `Skills`: Skills section with categories (Technical, Business, Tools).
  - `Portfolio`: Projects section with project cards.
  - `Resume`: Resume section with PDF link and highlights.
  - `Contact`: Contact section with form and links.
- **Shared UI**: Reusable components like `SectionTitle`, `ProjectCard`, `SkillBadge`.

## 4. Design Tokens (Tailwind CSS)
- **Primary Color**: Zinc (Zinc-900 for dark themes, Zinc-50 for backgrounds).
- **Accent Color**: Indigo (Indigo-600 for buttons, links, and highlights).
- **Typography**: Sans-serif (Inter/Geist) for modern, professional feel.

## 5. Deployment Strategy
1. **GitHub Pages**: Deploy the `dist` folder to the `gh-pages` branch.
2. **GitHub Actions**: Automated deployment on push to `main` branch.

## 6. Project Structure
```
src/
├── assets/          # Images and fonts
├── components/      # Reusable UI components
├── pages/           # Main page components
├── data/            # Static data (resume content, project details)
├── hooks/           # Custom hooks
├── utils/           # Helper functions
└── App.tsx          # Main entry point
```

## 7. Performance & SEO
- **Lazy Loading**: Use `React.lazy` if needed for large sections.
- **Responsive Images**: Optimized images for fast loading.
- **SEO**: Meta tags for job search relevance.
