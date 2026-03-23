---
description: Perform full system quality assurance and styling check
---

# UI QA & Styling Check Workflow

This workflow is used to thoroughly audit the application's user interface, ensuring consistency, responsiveness, and proper use of the design system (Tailwind).

1. Review all components in `src/components` for inline styles that should be converted to Tailwind utility classes.
2. Ensure consistent use of spacing (`p-4`, `m-2`, etc.), colors, and typography across the UI.
3. Replace raw SVGs with standardized `lucide-react` icons where applicable.
4. If necessary, use the `default_api:browser_subagent` to visually test the application layout and responsiveness.
