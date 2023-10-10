import express from "express";
import userRoutes from "./routes/userRoutes.js";
import { notFound, errorHandller } from "./middleware/errorMiddleware.js";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5050;

const app = express();

app.use("/api/users", userRoutes);
app.use(notFound);
app.use(errorHandller);

app.get("/", (req, res) => res.send("Server is ready"));

app.listen(port, () => console.log(`Server Started at ${port}`));

// -- POST /api/users - Register a user
// -- POST /api/users/auth - Authenticate a user and get token
// -- POST /api/users/logout** — Logout user and clear cookie
// -- GET /api/users/profile** — Get user profile
// —- GET /api/users/profile** — Update profile
