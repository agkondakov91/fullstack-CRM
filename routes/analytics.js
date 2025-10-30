import express from "express";
import controller from "../controllers/analytics.js";
export const router = express.Router();

router.get("/overview", controller.overview);
router.get("/analitics", controller.analitics);
