import Position from "../models/Position.js";
import { errorHandler } from "../utils/errorHandler.js";

class ControllerPosition {
  async getByCategoryId(req, res) {
    try {
      const positions = await Position.find({
        category: req.params.categoryId,
        user: req.user.id,
      });
      res.status(200).json(positions);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async create(req, res) {
    try {
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async remove(req, res) {
    try {
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async update(req, res) {
    try {
    } catch (error) {
      errorHandler(res, error);
    }
  }
}

const controller = new ControllerPosition();
export default controller;
