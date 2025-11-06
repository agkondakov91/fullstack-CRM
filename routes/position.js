import express from "express";
import passport from "passport";
import controller from "../controllers/position.js";
export const router = express.Router();

router.get(
  "/:categoryId",
  passport.authenticate("jwt", { session: false }),
  controller.getByCategoryId
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.create
);
router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  controller.update
);
router.delete(
  "/:d",
  passport.authenticate("jwt", { session: false }),
  controller.remove
);
