---
description: Scaffold a standard Express REST API route and controller
---

# Create API Route Workflow

This workflow scaffolds a new Express API route and its corresponding controller to ensure standard MVC architecture in our backend.

1. Create the base logic in `controllers/[Entity]Controller.js` adhering to `Req/Res` patterns in Express.
2. Use a `try/catch` wrapper for async/await errors.
3. Scaffold the route in `routes/[Entity]Routes.js`.
4. Register the route in `index.js` or `server.js`.

Example route mapping:
```javascript
import express from 'express';
import { getEntity, createEntity } from '../controllers/entityController.js';

const router = express.Router();
router.get('/', getEntity);
router.post('/', createEntity);

export default router;
```
