import express from "express";
import controller from "../controllers/category.js";
import passport from "passport";
export const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }), // Защита маршрута с помощью JWT
  controller.getAll
);
router.get("/:id", controller.getById);
router.delete("/:id", controller.remove);
router.post("/", controller.create);
router.patch("/:id", controller.update);
