const db = require("../../data/dbConfig");

const getById = async (id) => {
  let {
    task_id,
    task_notes,
    task_description,
    task_completed,
    project_id,
  } = await db("tasks").where("task_id", id).first();
  return {
    task_id,
    task_description,
    task_notes,
    task_completed: Boolean(task_completed),
    project_id,
  };
};

const get = async () => {
  let tasks = await db("tasks as t").join(
    "projects as p",
    "p.project_id",
    "t.project_id"
  );
  let mappedItems = tasks.map((t) => {
    return {
      task_id: t.task_id,
      task_notes: t.task_notes,
      task_description: t.task_description,
      task_completed: Boolean(t.task_completed),
      project_id: t.project_id,
      project_name: t.project_name,
      project_description: t.project_description,
    };
  });
  return mappedItems;
};

const add = async (resource) => {
  let [id] = await db("tasks").insert(resource);
  return getById(id);
};

module.exports = {
  add,
  getById,
  get,
};
