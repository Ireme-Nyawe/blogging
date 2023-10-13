import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

// importing routes
import routeBlog from "./routes/blogRoutes";
import routeUser from "./routes/userRoutes";
const app=express();


// configuration
// configuration of swagger
const options = {
    definition : {
        openapi : '3.0.0',
        info : {
            title : 'APIs Documentation',
            version : '1.0.0'
        },
        servers :[{
            url: 'http://localhost:4000/'
        }]
    },
    apis : ['./src/Docs/*.js'], //  Determining pa
}
const swaggerSpec = swaggerJSDoc(options);
app.use("/docs/",swaggerUi.serve,swaggerUi.setup(swaggerSpec))
// dependences configuraion
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