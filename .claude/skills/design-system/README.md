# Design System Generator

Create consistent, scalable design systems for applications.

## Core Components

### Design Tokens
```css
:root {
  /* Colors */
  --color-primary: #3b82f6;
  --color-secondary: #6366f1;
  --color-success: #22c55e;
  --color-warning: #f59e0b;
  --color-error: #ef4444;

  /* Typography */
  --font-sans: system-ui, sans-serif;
  --font-mono: ui-monospace, monospace;
  --font-size-xs: 0.75rem;
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.125rem;
  --font-size-xl: 1.25rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;

  /* Border Radius */
  --radius-sm: 0.25rem;
  --radius-md: 0.375rem;
  --radius-lg: 0.5rem;
  --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.05);
  --shadow-md: 0 4px 6px rgba(0,0,0,0.1);
  --shadow-lg: 0 10px 15px rgba(0,0,0,0.1);
}
```

### Component Patterns

#### Button Variants
- Primary: Main actions
- Secondary: Alternative actions
- Ghost: Subtle actions
- Destructive: Dangerous actions

#### Form Elements
- Input fields with consistent padding
- Labels with proper spacing
- Error states with clear messaging
- Focus rings for accessibility

#### Layout Components
- Container with max-width
- Grid system (12-column)
- Flex utilities
- Stack (vertical spacing)

## Implementation Checklist

- [ ] Define color palette (primary, neutral, semantic)
- [ ] Set typography scale
- [ ] Create spacing system
- [ ] Design button component
- [ ] Design input components
- [ ] Create card component
- [ ] Build modal/dialog
- [ ] Add toast notifications
- [ ] Implement navigation patterns
- [ ] Document all components

## Accessibility Requirements

- Color contrast ratio >= 4.5:1
- Focus indicators visible
- Touch targets >= 44x44px
- Screen reader labels
- Keyboard navigation support
