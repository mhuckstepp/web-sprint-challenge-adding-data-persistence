// build your `Resource` model here
const db = require("../../data/dbConfig");

const getById = (id) => {
  return db("resources").where("resource_id", id).first();
};

const get = () => {
  return db("resources");
};

const add = async (resource) => {
  let [id] = await db("resources as r").insert(resource);
  return getById(id);
};

module.exports = {
  add,
  getById,
  get,
};
