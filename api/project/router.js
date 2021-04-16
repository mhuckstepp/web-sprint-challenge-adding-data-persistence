const router = require("express").Router();
const { add, getById, get } = require("./model");

router.post("/", (req, res, next) => {
  add(req.body)
    .then((project) => {
      res.status(201).json(project);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  get()
    .then((projects) => {
      res.status(200).json(projects);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  getById(req.params.id)
    .then((project) => {
      res.status(200).json(project);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  res.json("hello from project router");
});

module.exports = router;
