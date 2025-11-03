class ControllerCategory {
  getAll(req, res) {
    res.json({ message: "Get all categories" }); // Пример ответа когда есть аутентификация
  }

  getById(req, res) {}

  remove(req, res) {}

  create(req, res) {}

  update(req, res) {}
}

const controller = new ControllerCategory();
export default controller;
