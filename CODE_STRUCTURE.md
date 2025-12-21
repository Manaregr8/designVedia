# Code Structure & Quality Improvements

## Current Project Structure Assessment

### ✅ Strengths
1. **Clear separation of concerns** - app/, components/, lib/, styles/
2. **CSS Modules for scoping** - Prevents style conflicts
3. **API route organization** - Logical grouping under /api/
4. **Environment configuration** - Well-documented setup

### ⚠️ Areas for Improvement

#### 1. File Extension Consistency
**Current**: Mix of `.js` and `.jsx`
```
HomeSection1.js
HomeSection2.js
Header.js
Footer.js
AdminLayout.jsx
BlogEditor.jsx
```

**Recommendation**: Use `.jsx` for React components, `.js` for utilities

---

## Recommended Folder Structure Additions

```
src/
├── app/              (existing)
├── components/       (existing)
├── hooks/            (new)
│   ├── useScrollAnimation.js
│   ├── useMediaQuery.js
│   ├── usePrevious.js
│   └── index.js
├── lib/              (existing)
├── styles/           (existing)
├── types/            (new - for TypeScript migration)
│   ├── blog.ts
│   ├── user.ts
│   └── index.ts
├── constants/        (new)
│   ├── colors.js
│   ├── typography.js
│   └── breakpoints.js
└── utils/            (new)
    ├── validators.js
    ├── formatters.js
    └── storage.js
```

---

## Implementation Roadmap

### Phase 1: Immediate (Week 1)
- [ ] Create `src/constants/` folder
  ```javascript
  // src/constants/design.js
  export const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    wide: 1440,
  }
  
  export const COLORS = {
    primary: '#1d448c',
    accent: '#eebe25',
    background: '#ffffff',
    text: '#000000',
  }
  
  export const TYPOGRAPHY = {
    fontFamily: '"Neurial Grotesk", system-ui, -apple-system, sans-serif',
    sizes: {
      xs: '12px',
      sm: '14px',
      base: '16px',
      lg: '18px',
      xl: '24px',
      '2xl': '32px',
    },
  }
  ```

- [ ] Extract validation logic
  ```javascript
  // src/utils/validators.js
  export const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }
  
  export const validateBlogData = (data) => {
    const errors = {}
    if (!data.title?.trim()) errors.title = 'Title is required'
    if (!data.content?.trim()) errors.content = 'Content is required'
    if (data.title && data.title.length > 200) errors.title = 'Title max 200 chars'
    return Object.keys(errors).length > 0 ? errors : null
  }
  
  export const validateImageFile = (file) => {
    const validTypes = ['image/jpeg', 'image/png', 'image/webp']
    const maxSize = 32 * 1024 * 1024 // 32MB
    
    if (!validTypes.includes(file.type)) {
      return 'Invalid file type'
    }
    if (file.size > maxSize) {
      return 'File size exceeds 32MB'
    }
    return null
  }
  ```

- [ ] Create custom hooks
  ```javascript
  // src/hooks/useMediaQuery.js
  import { useState, useEffect } from 'react'
  
  export const useMediaQuery = (query) => {
    const [matches, setMatches] = useState(false)
  
    useEffect(() => {
      const media = window.matchMedia(query)
      if (media.matches !== matches) {
        setMatches(media.matches)
      }
      const listener = () => setMatches(media.matches)
      media.addEventListener('change', listener)
      return () => media.removeEventListener('change', listener)
    }, [matches, query])
  
    return matches
  }
  
  // Usage in components
  // const isMobile = useMediaQuery('(max-width: 768px)')
  ```

### Phase 2: Code Quality (Week 2)
- [ ] Add ESLint rules for consistency
  ```javascript
  // .eslintrc.json updates
  {
    "rules": {
      "react/jsx-filename-extension": ["warn", { "extensions": [".jsx"] }],
      "no-console": ["warn", { "allow": ["warn", "error"] }],
      "no-unused-vars": "warn",
      "prefer-const": "warn"
    }
  }
  ```

- [ ] Add Prettier formatting
  ```bash
  npm install --save-dev prettier
  # Create .prettierrc
  {
    "semi": true,
    "singleQuote": true,
    "trailingComma": "es5",
    "tabWidth": 2,
    "printWidth": 100
  }
  ```

- [ ] Set up pre-commit hooks
  ```bash
  npm install --save-dev husky lint-staged
  npx husky install
  
  # Create .husky/pre-commit
  #!/bin/sh
  . "$(dirname "$0")/_/husky.sh"
  npx lint-staged
  
  # Add to package.json
  "lint-staged": {
    "*.{js,jsx}": ["eslint --fix", "prettier --write"],
    "*.css": ["prettier --write"]
  }
  ```

### Phase 3: Documentation (Week 3)
- [ ] Create component documentation
  ```javascript
  // src/components/BlogCard.jsx
  /**
   * BlogCard Component
   * 
   * Displays a blog post preview card with title, excerpt, and metadata
   * 
   * @component
   * @example
   * const blog = { id: 1, title: 'Hello', excerpt: '...' }
   * return <BlogCard blog={blog} />
   * 
   * @param {Object} blog - Blog object
   * @param {string} blog.id - Unique identifier
   * @param {string} blog.title - Post title
   * @param {string} blog.excerpt - Post summary
   * @returns {JSX.Element}
   */
  ```

- [ ] Add JSDoc comments to utilities
- [ ] Create CONTRIBUTING.md guidelines

### Phase 4: Testing (Week 4)
- [ ] Set up Jest
  ```bash
  npm install --save-dev jest @testing-library/react @testing-library/jest-dom
  ```

- [ ] Write tests for utilities
  ```javascript
  // src/utils/__tests__/validators.test.js
  import { validateEmail, validateBlogData } from '../validators'
  
  describe('validateEmail', () => {
    it('should validate correct email', () => {
      expect(validateEmail('test@example.com')).toBe(true)
    })
    
    it('should reject invalid email', () => {
      expect(validateEmail('invalid')).toBe(false)
    })
  })
  ```

---

## Code Quality Metrics

### Current State
```
Lines of Code: ~5000
Components: 30+
Modules: 15+
Test Coverage: 0%
```

### Target State
```
Lines of Code: ~5000 (no bloat)
Components: 30+ (organized)
Modules: 25+ (utilities)
Test Coverage: 60%+
```

---

## API Route Best Practices

### Current Implementation ✅
- Proper error handling
- Authentication checks
- Request validation

### Suggested Enhancements
```javascript
// src/lib/api-middleware.js
export const withAuth = (handler) => async (req, context) => {
  const session = await ensureAdminApi(req)
  if (!session) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }
  return handler(req, context, session)
}

export const withValidation = (schema) => (handler) => async (req, context) => {
  try {
    const body = await req.json()
    const validation = schema.validate(body)
    if (validation.error) {
      return NextResponse.json({ error: validation.error.message }, { status: 400 })
    }
    return handler(req, context, validation.value)
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON' }, { status: 400 })
  }
}
```

---

## Type Safety Migration Plan

### Option 1: Gradual Migration (Recommended)
1. Create `tsconfig.json` with `allowJs: true`
2. Convert utilities first (no dependencies)
3. Convert components second
4. Convert API routes last

### Option 2: Full TypeScript Conversion
1. Rename all `.js` → `.ts` / `.jsx` → `.tsx`
2. Add type definitions
3. Run type checker: `tsc --noEmit`

---

## File Naming Conventions

### Established ✅
- Components: PascalCase (Header.jsx, BlogCard.jsx)
- Utilities: camelCase (validateEmail.js, useScrollAnimation.js)
- Styles: Match component name (Header.module.css)

### To Implement
- Hooks: usePrefix (useMediaQuery.js)
- Constants: UPPER_SNAKE_CASE in files (COLORS, BREAKPOINTS)
- Types: PascalCase.ts (Blog.ts, User.ts)

---

## Dependencies Audit

### Current Dependencies
✅ `next` - Latest version
✅ `react` - 19.2.0 (latest)
✅ `@prisma/client` - Good ORM choice
✅ `@tiptap/*` - Rich editor (used in admin)
✅ `gsap` - Animation library (check usage)
⚠️ `lucide-react` - Icon library (potentially large)

### Recommendations
- Audit GSAP usage - may be heavy for animations
- Consider lighter alternatives for icons if needed
- Add only critical dependencies

---

## Performance Impact

Expected improvements after implementation:

| Area | Impact | Effort |
|------|--------|--------|
| Code Maintainability | High | Low |
| Developer Experience | High | Low |
| Bundle Size | Medium | Medium |
| Build Time | Low | Low |
| Type Safety | High | High |
| Test Coverage | High | High |

---

## Success Criteria

After implementation:
- [ ] All components in `src/components/` use `.jsx`
- [ ] All utilities extracted to `src/utils/` and `src/hooks/`
- [ ] Constants centralized in `src/constants/`
- [ ] ESLint passes without warnings
- [ ] Prettier formatting applied
- [ ] 60%+ test coverage on utilities
- [ ] JSDoc comments on all public functions
- [ ] TypeScript compilation passes (if migrated)

---

**Target Completion**: 4 weeks
**Estimated Time Investment**: 20-30 hours
**Difficulty**: Low-Medium
