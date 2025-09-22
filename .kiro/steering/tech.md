# Technology Stack

## Build System & Framework
- **Build Tool**: Vite 5.4.2
- **Framework**: React 18.3.1 with TypeScript
- **Routing**: React Router DOM 6.22.3
- **Styling**: Tailwind CSS 3.4.1 with PostCSS and Autoprefixer

## Key Dependencies
- **Animations**: Framer Motion 12.23.15
- **3D Graphics**: Three.js 0.162.0 with React Three Fiber 8.15.19 and Drei 9.99.7
- **Icons**: Lucide React 0.344.0
- **Development**: ESLint 9.9.1 with TypeScript ESLint 8.3.0

## Development Commands
```bash
# Start development server
npm run dev

# Build for production
npm run build

# Run linting
npm run lint

# Preview production build
npm run preview
```

## Configuration Files
- `vite.config.ts`: Vite configuration with React plugin
- `tailwind.config.js`: Custom color variables and animations
- `eslint.config.js`: ESLint rules for React and TypeScript
- `tsconfig.json`: TypeScript configuration with strict mode

## Development Server
- **Port**: 5173
- **Host**: Enabled for network access
- **Build Output**: `dist/` directory with source maps

## Code Quality
- TypeScript strict mode enabled
- ESLint with React hooks and refresh plugins
- Prettier integration recommended
- Modern ES modules throughout