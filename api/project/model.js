// build your `Resource` model here
const db = require("../../data/dbConfig");

const getById = async (id) => {
  let {
    project_id,
    project_name,
    project_description,
    project_completed,
  } = await db("projects").where("project_id", id).first();
  // if (project.project_completed) {
  //   project.project_completed = "true";
  // } else {
  //   project.project_completed = "false";
  // }

  return {
    project_id,
    project_name,
    project_description,
    project_completed: Boolean(project_completed),
  };
};

const add = async (resource) => {
  let [id] = await db("projects").insert(resource);
  return getById(id);
};

module.exports = {
  add,
  getById,
};
