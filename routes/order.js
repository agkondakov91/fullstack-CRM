import express from "express";
import passport from "passport";
import controller from "../controllers/order.js";
export const router = express.Router();

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.getAll
);
router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  controller.create
);
