import Order from "../models/Order.js";
import { errorHandler } from "../utils/errorHandler.js";

class ControllerOrder {
  // (get) localhost:5000/api/order?offset=2&limit=5 - пример запроса с пагинацией
  async getAll(req, res) {
    const query = {
      user: req.user.id,
    };
    // Применение фильтров даты (старт и конец), если они есть в запросе
    if (req.query.start) {
      query.date = {
        $gte: req.query.start,
      };
    }

    if (req.query.end) {
      if (!query.date) {
        query.date = {};
      }

      query.date["$lte"] = req.query.end;
    }

    if (req.query.order) {
      query.order = +req.query.order;
    }

    try {
      const orders = await Order.find(query)
        .sort({ date: -1 })
        .skip(+req.query.offset) // пропустить n первых результатов
        .limit(+req.query.limit); // ограничить количество результатов

      res.status(200).json(orders);
    } catch (error) {
      errorHandler(res, error);
    }
  }

  async create(req, res) {
    try {
      // Найти максимальный номер заказа у пользователя
      const lastOrder = await Order.findOne({ user: req.user.id }).sort({
        date: -1,
      });
      // Если заказов нет, то максимальный номер 0
      const maxOrder = lastOrder ? lastOrder.order : 0;

      const order = await new Order({
        list: req.body.list,
        user: req.user._id,
        // Найти максимальный номер заказа и увеличить на 1
        order: maxOrder + 1,
      }).save();
      res.status(201).json(order);
    } catch (error) {
      errorHandler(res, error);
    }
  }
}

const controller = new ControllerOrder();
export default controller;
