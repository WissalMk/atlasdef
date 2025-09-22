# Project Structure

## Root Directory
```
├── public/                 # Static assets
│   ├── Certifications/     # Certification images
│   ├── Logos/             # Technology and company logos
│   └── shield-icon.svg    # Main brand icon
├── src/                   # Source code
├── .kiro/                 # Kiro AI configuration
├── .vscode/               # VS Code settings
└── node_modules/          # Dependencies
```

## Source Code Organization (`src/`)
```
src/
├── components/            # Reusable React components
│   ├── home/             # Homepage-specific components
│   ├── layout/           # Layout components (Header, Footer, etc.)
│   ├── services/         # Service-related components
│   └── utils/            # Utility components
├── pages/                # Route-based page components
│   └── services/         # Individual service pages
├── App.tsx               # Main application component with routing
├── main.tsx              # Application entry point
├── index.css             # Global styles and Tailwind imports
└── vite-env.d.ts         # Vite type definitions
```

## Routing Structure
- **Root**: Layout wrapper with nested routes
- **Services**: Category-based routing (`/services/:category/:service`)
- **Service Categories**:
  - `cybersecurity/` - Security services
  - `infrastructure/` - Infrastructure services  
  - `development/` - Development services

## Component Patterns
- **Page Components**: Full page implementations in `pages/`
- **Layout Components**: Shared UI structure in `components/layout/`
- **Feature Components**: Domain-specific components in respective folders
- **Utility Components**: Reusable helpers in `components/utils/`

## File Naming Conventions
- **Components**: PascalCase (e.g., `WebDevelopmentPage.tsx`)
- **Pages**: Descriptive names ending with "Page" (e.g., `HomePage.tsx`)
- **Assets**: kebab-case in public folder
- **Styles**: CSS custom properties for theming

## Key Architectural Decisions
- Single-page application with client-side routing
- Component-based architecture with clear separation of concerns
- Static asset management through public folder
- TypeScript throughout for type safety