import {DataTypes} from 'sequelize'
import {sequelize} from '../dataBase/database.js'
import {task} from './task.js'

export const Categorys = sequelize.define('taskCategory',{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    },
    categoryName:{
        type: DataTypes.STRING
    },
    priority:{
        type: DataTypes.INTEGER
    },
    description:{
        type: DataTypes.STRING
    }},
    { timestamps: true});

// aqui abajo le digo que las categorias, pueden tener muchas tareas
    Categorys.hasMany(task, {
        foreignKey: 'projectId',
        sourceKey: 'id'
    })

// Aqui le digo que una tarea puede estar en una categoria
    task.belongsTo(Categorys,{
        foreignKey: 'projectId',
        targetId: 'id'
    })