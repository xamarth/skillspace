```markdown
# skillspace Development Patterns

> Auto-generated skill from repository analysis

## Overview
This skill teaches best practices and workflows for contributing to the **skillspace** codebase, a TypeScript project using the Vite framework. You'll learn the project's coding conventions, how to update key UI components, and how to follow established workflows for consistent, high-quality contributions.

## Coding Conventions

### File Naming
- Use **camelCase** for file names.
  - Example: `skillCard.tsx`, `userProfile.ts`

### Import Style
- Use **absolute imports** from the project root.
  - Example:
    ```typescript
    import { SkillCard } from 'src/components/skillCard'
    ```

### Export Style
- Use **named exports**.
  - Example:
    ```typescript
    export function SkillCard(props: SkillCardProps) { ... }
    ```

### Commit Messages
- Freeform style, typically short (average 7 characters).
  - Example: `fix bug`, `update`, `refactor`

## Workflows

### Update Skillcard and Root Route
**Trigger:** When you want to modify or enhance the homepage/dashboard UI or its main components.  
**Command:** `/update-home-ui`

1. Edit `src/components/skillcard.tsx` to update the skill card UI or logic.
    - Example:
      ```typescript
      // src/components/skillcard.tsx
      export function SkillCard({ skill }) {
        return (
          <div className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        )
      }
      ```
2. Edit `src/routes/__root.tsx` and/or `src/routes/index.tsx` to reflect changes in the main route or homepage.
    - Example:
      ```typescript
      // src/routes/index.tsx
      import { SkillCard } from 'src/components/skillcard'

      export function HomePage() {
        return (
          <main>
            <SkillCard skill={...} />
          </main>
        )
      }
      ```

## Testing Patterns

- **Test File Pattern:** Files named with `*.test.*` (e.g., `skillcard.test.tsx`)
- **Testing Framework:** Not explicitly detected; follow typical patterns for your chosen framework.
- **Example:**
  ```typescript
  // src/components/skillcard.test.tsx
  import { render } from '@testing-library/react'
  import { SkillCard } from './skillcard'

  test('renders skill name', () => {
    const { getByText } = render(<SkillCard skill={{ name: 'TypeScript', description: '...' }} />)
    expect(getByText('TypeScript')).toBeInTheDocument()
  })
  ```

## Commands

| Command           | Purpose                                                      |
|-------------------|--------------------------------------------------------------|
| /update-home-ui   | Update the skillcard component and main/root route files     |
```
