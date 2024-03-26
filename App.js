import express from 'express';
import Hello from "./Hello.js"
import Lab5 from './Lab5.js';
import cors from "cors";
import CourseRoutes from "./src/Kanbas/courses/routes.js";
import ModuleRoutes from "./src/Kanbas/Modules/routes.js";
import AssignmentRoutes from './src/Kanbas/assignments/routes.js';

const app = express()
app.use(cors());
app.use(express.json());
CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app)

app.listen(process.env.PORT || 4000);