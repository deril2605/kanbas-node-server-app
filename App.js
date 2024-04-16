import express from 'express';
import Hello from "./Hello.js"
import Lab5 from './Lab5.js';
import cors from "cors";
import mongoose from "mongoose";
import CourseRoutes from "./Kanbas/courses/routes.js";
import ModuleRoutes from "./Kanbas/modules/routes.js";
import AssignmentRoutes from './Kanbas/assignments/routes.js';
import UserRoutes from "./Users/routes.js";
import session from "express-session";
import "dotenv/config";

const app = express()

// app.use(cors());
app.use(express.json());


const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    proxy: true,
    cookie: {
        sameSite: "none",
        secure: true,
        domain: "kanbas-node-server-app-1-mds9.onrender.com",
    },
};
app.use(
    session(sessionOptions)
);

if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
        sameSite: "none",
        secure: true,
        domain: process.env.HTTP_SERVER_DOMAIN,
    };
}

app.use(cors({
    credentials: true,
    origin: process.env.FRONTEND_URL
}));

CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
Hello(app)
Lab5(app)
UserRoutes(app);
// mongoose.connect("mongodb://127.0.0.1:27017/kanbas");

// mongoose.connect("mongodb+srv://derilraju:derilraju@mykanbascluster.8nf2dpl.mongodb.net/?retryWrites=true&w=majority&appName=myKanbasCluster");
console.log(process.env.DB_CONNECTION_STRING)
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
//  || "mongodb://127.0.0.1:27017/kanbas"
mongoose.connect(CONNECTION_STRING);

app.listen(process.env.PORT || 4000);