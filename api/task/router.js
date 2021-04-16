const router = require("express").Router();
const { add, getById, get } = require("./model");

router.post("/", (req, res, next) => {
  add(req.body)
    .then((task) => {
      res.status(201).json(task);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  get()
    .then((tasks) => {
      res.status(200).json(tasks);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  getById(req.params.id)
    .then((task) => {
      res.status(200).json(task);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  res.json("hello from task router");
});

module.exports = router;
