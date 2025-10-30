import express from "express";
import controller from "../controllers/position.js";
export const router = express.Router();

router.get("/:categoryId", controller.getByCategoryId);
router.post("/", controller.create);
router.patch("/:id", controller.update);
router.delete("/:d", controller.remove);
