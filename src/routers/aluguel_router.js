const express = require("express");
const router = express.Router();
const aluguel_controller = require("../controllers/aluguel_controller.js");

router.post("/", (req, res) => {
  const aluguel = req.body;
  const code = aluguel_controller.store(aluguel);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const aluguel = aluguel_controller.index();
  res.json(aluguel);
});

router.get("/:id", (req, res) => {
  const aluguel = aluguel_controller.show(req.params.id);
  res.json(aluguel);
});

router.put("/:id", (req, res) => {
  const aluguel = req.body;
  const code = aluguel_controller.update(req.params.id, aluguel);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  aluguel_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
