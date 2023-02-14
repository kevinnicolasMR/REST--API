import { Categorys } from "../models/proyect.js";
import { task } from '../models/task.js'

export const getCategorys = async (req, res) => {
  try {
    // throw new Error("error")
    const viewCategory = await Categorys.findAll();
    res.json(viewCategory);
  } catch (error) {
    res.status(500).send("Papu, hubo un error");
  }
};

export const getCategoryId = async (req, res) => {
  try {
    const { id } = req.params;
    const singleCategory = await Categorys.findByPk(id);

    if (!singleCategory){
        return res.status(404).send(`la categoria ${id} no exsiste`)
    }

    res.json(singleCategory);
  } catch (error) {
    res.status(500).send("Papu, hubo un error");
  }
};

export const createCategorys = async (req, res) => {
  try {
    const { categoryName, priority, description } = req.body;

    const newCategory = await Categorys.create({
      categoryName,
      description,
      priority,
    });
    res.json(newCategory);
  } catch (error) {
    res.status(500).send("Papu, hubo un error");
  }
};

export const updateCategorys = async (req, res) => {
  try {
    const { id } = req.params;
    const { categoryName, priority, description } = req.body;

    const category = await Categorys.findByPk(id);
    category.categoryName = categoryName;
    category.priority = priority;
    category.description = description;

    await category.save();
    return res.json(category);
  } catch (error) {
    res.status(500).send("Papu, hubo un error");
  }
};

export const deleteCategorys = async (req, res) => {
  const { id } = req.params;
  try {
    await Categorys.destroy({
      where: {
        id,
      },
    });
    res.status(204).send("Destruido con exito!");
  } catch (error) {
    return res.status(500).send("Error to delete item database");
  }
};


export const taskByCategorys = async (req, res) =>{
  const {id} = req.params;

  const taskCategory = await task.findAll({
    where: {projectId: id}
  })
  res.json(taskCategory)
}





