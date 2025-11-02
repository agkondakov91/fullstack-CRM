import bcrypt from "bcryptjs";
import User from "../models/User.js";

class ControllerAuth {
  login(req, res) {
    res.status(200).json({
      login: {
        email: req.body.email || "",
        password: req.body.password || "",
      },
    });
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
        res.status(500).json({ message: "Ошибка сервера. Попробуйте позже." });
      }
    }
  }
}

const controller = new ControllerAuth();
export default controller;
