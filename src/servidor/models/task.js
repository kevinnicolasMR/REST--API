import {DataTypes} from 'sequelize';
import { sequelize } from '../dataBase/database.js';

export const task = sequelize.define("task", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name:{
        type: DataTypes.STRING
    },
    description:{
        type: DataTypes.STRING
    },
    done:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }

},{
    timestamps: true
})