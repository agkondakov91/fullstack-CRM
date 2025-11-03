import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import keys from "../config/keys.js";
import { errorHandler } from "../utils/errorHandler.js";

class ControllerAuth {
  async login(req, res) {
    const candidate = await User.findOne({
      email: req.body.email,
    });
    if (candidate) {
      // Проверка пароля, пользователь существует
      const passwordResult = bcrypt.compareSync(
        req.body.password,
        candidate.password
      );

      if (passwordResult) {
        // Пароль верный, генерируем токен
        const token = jwt.sign(
          {
            email: candidate.email,
            userId: candidate._id,
          },
          keys.jwt,
          { expiresIn: 60 * 60 }
        );
        res.status(200).json({ token: `Bearer ${token}` });
      } else {
        // Пароль неверный
        res.status(401).json({ message: "Пароли не совпадают" });
      }
    } else {
      // Пользователя нет, ошибка
      res.status(404).json({ message: "Пользователь с таким email не найден" });
    }
  }

  async register(req, res) {
    const candidate = await User.findOne({ email: req.body.email });

    if (candidate) {
      // Пользователь с таким email уже существует
      res.status(409).json({ message: "Такой email уже занят" });
    } else {
      // Создаем нового пользователя и шифруем пароль
      const salt = bcrypt.genSaltSync(10);
      const password = req.body.password;
      const user = new User({
        email: req.body.email,
        password: bcrypt.hashSync(password, salt),
      });

      try {
        await user.save();
        res.status(201).json({ message: "Пользователь создан", user });
      } catch (error) {
        // Обработка ошибки при сохранении пользователя
        console.error("Ошибка при создании пользователя:", error);
        errorHandler(res, error);
      }
    }
  }
}

const controller = new ControllerAuth();
export default controller;
