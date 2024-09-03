const express = require("express");
const router = express.Router();
const estudante_controller = require("../controllers/estudante_controller.js");

router.post("/", (req, res) => {
  const atendimento = req.body;
  const code = estudante_controller.store(atendimento);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const atendimento = estudante_controller.index();
  res.json(atendimento);
});

router.get("/:id", (req, res) => {
  const atendimento = estudante_controller.show(req.params.id);
  res.json(atendimento);
});

router.put("/:id", (req, res) => {
  const atendimento = req.body;
  const code = estudante_controller.update(req.params.id, atendimento);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  estudante_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
