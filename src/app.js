import express from 'express';
import categorysRoutes from '../src/servidor/routes/categorys.routes.js'
import tasksRoutes from './servidor/routes/tasks.routes.js';
const app = express()

//middlewares
app.use(express.json())

app.use(categorysRoutes)
app.use(tasksRoutes)


export default app