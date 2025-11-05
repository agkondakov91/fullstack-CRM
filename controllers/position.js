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
      const position = new Position({
        name: req.body.name,
        cost: req.body.cost,
        category: req.body.category,
        user: req.user.id,
      }).save();
      res.status(201).json(position);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async remove(req, res) {
    try {
      await Position.remove({ _id: req.params.id });
      res.status(200).json({
        message: "Position deleted",
      });
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async update(req, res) {
    try {
      const position = await Position.findOneAndUpdate(
        { _id: req.params.id },
        { $set: req.body },
        { new: true }
      );
      res.status(200).json(position);
    } catch (error) {
      errorHandler(res, error);
    }
  }
}

const controller = new ControllerPosition();
export default controller;
