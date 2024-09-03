const express = require("express");
const router = express.Router();
const livro_controller = require("../controllers/livro_controller.js");

router.post("/", (req, res) => {
  const livro = req.body;
  const code = livro_controller.store(livro);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const livro = livro_controller.index();
  res.json(livro);
});

router.get("/:id", (req, res) => {
  const livro = livro_controller.show(req.params.id);
  res.json(livro);
});

router.put("/:id", (req, res) => {
  const livro = req.body;
  const code = livro_controller.update(req.params.id, livro);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  livro_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
