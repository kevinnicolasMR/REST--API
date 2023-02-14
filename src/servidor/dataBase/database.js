import Sequelize from 'sequelize';

export const sequelize = new Sequelize('mysql://root:123456789@localhost:3306/gestordenotas')
