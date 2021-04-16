const db = require("../../data/dbConfig");

const getById = async (id) => {
  let {
    project_id,
    project_name,
    project_description,
    project_completed,
  } = await db("projects").where("project_id", id).first();
  return {
    project_id,
    project_name,
    project_description,
    project_completed: Boolean(project_completed),
  };
};

const get = async () => {
  let projects = await db("projects");
  let mappedItems = projects.map((p) => {
    return {
      project_id: p.project_id,
      project_name: p.project_name,
      project_description: p.project_description,
      project_completed: Boolean(p.project_completed),
    };
  });
  return mappedItems;
};

const add = async (resource) => {
  let [id] = await db("projects").insert(resource);
  return getById(id);
};

module.exports = {
  add,
  getById,
  get,
};
