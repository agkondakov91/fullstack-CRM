import Category from "../models/Category.js";
import Position from "../models/Position.js";
import { errorHandler } from "../utils/errorHandler.js";

class ControllerCategory {
  async getAll(req, res) {
    try {
      const categories = await Category.find({ user: req.user.id });
      res.status(200).json(categories);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async getById(req, res) {
    try {
      const category = await Category.findById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async remove(req, res) {
    try {
      await Category.remove({ _id: req.params.id });
      await Position.remove({ category: req.params.id });
      res.status(200).json({
        message: "Category and associated positions deleted",
      });
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async create(req, res) {
    const category = new Category({
      name: req.body.name,
      user: req.user.id,
      imageSrc: req.file ? req.file.path : "",
    });
    try {
      await category.save();
      res.status(201).json(category);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async update(req, res) {
    const updated = {
      name: req.body.name,
    };
    if (req.file) {
      updated.imageSrc = req.file.path;
    }
    try {
      const category = await Category.findOneAndUpdate(
        { _id: req.params.id },
        { $set: updated },
        { new: true }
      );
      res.status(200).json(category);
    } catch (error) {
      errorHandler(res, error);
    }
  }
}

const controller = new ControllerCategory();
export default controller;
