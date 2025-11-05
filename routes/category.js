import express from "express";
import passport from "passport";
import controller from "../controllers/category.js";
import upload from "../middleware/upload.js";
export const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }), // Защита маршрута с помощью JWT
  controller.getAll
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.getById
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.remove
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.create
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  upload.single("image"),
  controller.update
);
