// build your `/api/resources` router here
const router = require("express").Router();
const { add, getById } = require("./model");

router.post("/", (req, res, next) => {
  add(req.body)
    .then((resource) => {
      res.status(201).json(resource);
    })
    .catch(next);
});

router.get("/:id", (req, res, next) => {
  getById(req.params.id)
    .then((resource) => {
      res.status(200).json(resource);
    })
    .catch(next);
});

router.get("/", (req, res, next) => {
  res.json("hello from resource router");
});

module.exports = router;
