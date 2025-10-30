import express from "express";
import controller from "../controllers/auth.js";
export const router = express.Router();

// http://localhost:3001/api/auth/login
router.post("/login", controller.login);
// http://localhost:3001/api/auth/register
router.post("/register", controller.register);
