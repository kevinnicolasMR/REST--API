import { task } from "../models/task.js";

export const getTask = async (req, res) => {
  const tasks = await task.findAll();
  res.json(tasks);
};

export const createTask = async (req, res) => {
  try {
    const { name, description, projectId } = req.body;

    const newTask = await task.create({
      name,
      description,
      projectId,
    });
    res.json(newTask);
  } catch (error) {
    return res.status(404).send("No se pudo crear tu tarea");
  }
};

export const deleteTask = async (req, res) => {
  const {id} = await req.params;
  try {
    await task.destroy({
      where: {id},
    })
    res.status(204).send("Destruido con exito!");
  } catch (error) {res.error}
};

export const updateTask = async (req, res) => {
  const {id} = await req.params;
  const Task = await task.findOne({
    where: {id},
  })
  /* 
  .set(req.body) => esto nos sirve para decirle a Task que busque los campos que tiene en su body, luego actualize solamente los que concuerden con la tareas encontradas.
  */

  Task.set(req.body)
  await Task.save()
  return res.json(Task)
};

export const getSingleTask = async (req,res) => {
    const {id} = req.params;
    const singleTask = await task.findOne({
        where: {id}
    });
    res.json(singleTask)

    if (!singleTask){
        return res.status(404).send(`la categoria ${id} no exsiste`)
    }
};
