---
description: Scaffold a new React Component with Tailwind CSS
---

# Scaffold Component Workflow

This workflow scaffolds a new React component with a standard structure, including its CSS module or Tailwind classes, and automatically integrates it into the project.

1. Ensure we are in the frontend directory.
2. Ask the user for the component name and its purpose, or infer it from the context.
3. Automatically create the necessary `.jsx` file in `src/components/`.
// turbo
4. Create a basic functional component template with `prop-types` and empty Tailwind classes.
5. Export the component for use.

Example:
```bash
echo "import React from 'react';\n\nconst MyComponent = () => {\n  return (\n    <div className=\"p-4 bg-white shadow rounded\">\n      {/* Content */}\n    </div>\n  );\n};\nexport default MyComponent;" > src/components/MyComponent.jsx
```
