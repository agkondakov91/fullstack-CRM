class ControllerAuth {
  login(req, res) {
    res.status(200).json({
      login: {
        email: req.body.email || "",
        password: req.body.password || "",
      },
    });
  }

  register(req, res) {
    res.status(200).json({
      register: "from controller",
    });
  }
}

const controller = new ControllerAuth();
export default controller;
