---
description: Create a fully typed Mongoose model and schema
---

# Create Mongoose Model Workflow

This workflow scaffolds a scalable Mongoose model for our MongoDB database.

1. Ensure we are in the `server/models` (or `backend/models`) directory.
2. Define the exact fields needed.
3. Create the Schema with appropriate timestamps, standardizing naming to `camelCase` for fields.
4. Export the Mongoose model.

Example:
```javascript
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['admin', 'employee'], default: 'employee' }
}, { timestamps: true });

export default mongoose.model('User', userSchema);
```
