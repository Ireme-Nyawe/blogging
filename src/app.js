import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

// importing routes
import routeBlog from "./routes/blogRoutes";
import routeUser from "./routes/userRoutes";


// configuration

const app=express();
dotenv.config();

app.use(cors());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
//routes
app.use("/api/cohort/blog", routeBlog);
app.use("/api/cohort/user", routeUser);

// test API
app.get("/",(req,res) =>{
res.status(200).json({
    status:"Well Done",
    author:"AKIMANA",
    message:"Hello, My API is on Set",
});
});

export default app