# React Best Practices

Modern React patterns and performance optimization techniques.

## Component Patterns

### Functional Components
```tsx
// Prefer function declarations for components
function UserCard({ user }: { user: User }) {
  return (
    <div className="user-card">
      <h2>{user.name}</h2>
    </div>
  );
}
```

### Custom Hooks
```tsx
// Extract reusable logic into hooks
function useLocalStorage<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
```

## Performance Optimization

### Memoization
```tsx
// Memoize expensive computations
const sortedItems = useMemo(
  () => items.sort((a, b) => a.name.localeCompare(b.name)),
  [items]
);

// Memoize callbacks passed to children
const handleClick = useCallback(() => {
  doSomething(id);
}, [id]);

// Memoize components that receive stable props
const MemoizedChild = memo(ChildComponent);
```

### Code Splitting
```tsx
// Lazy load routes/components
const Dashboard = lazy(() => import('./Dashboard'));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Dashboard />
    </Suspense>
  );
}
```

## State Management

### Local State
- Use `useState` for component-specific state
- Use `useReducer` for complex state logic

### Shared State
- Context for theme, auth, preferences
- External stores (Zustand, Jotai) for complex state

### Server State
- React Query / TanStack Query for data fetching
- SWR for simpler use cases

## File Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   └── features/     # Feature-specific components
├── hooks/            # Custom hooks
├── lib/              # Utilities, API clients
├── types/            # TypeScript types
└── app/              # Routes/pages
```

## Common Pitfalls

- **Avoid**: Inline object/array literals in JSX (causes re-renders)
- **Avoid**: Missing dependency arrays in hooks
- **Avoid**: Over-using Context (causes unnecessary re-renders)
- **Avoid**: Prop drilling more than 2-3 levels
- **Do**: Use React DevTools Profiler to identify issues
