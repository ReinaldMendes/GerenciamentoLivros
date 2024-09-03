const express = require("express");
const router = express.Router();
const livro_controller = require("../controllers/livro_controller.js");

router.post("/", (req, res) => {
  const atendimento = req.body;
  const code = livro_controller.store(atendimento);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const atendimento = livro_controller.index();
  res.json(atendimento);
});

router.get("/:id", (req, res) => {
  const atendimento = livro_controller.show(req.params.id);
  res.json(atendimento);
});

router.put("/:id", (req, res) => {
  const atendimento = req.body;
  const code = livro_controller.update(req.params.id, atendimento);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  livro_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
