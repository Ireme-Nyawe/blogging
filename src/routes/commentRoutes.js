import express from "express";
import { addComment, getAllComment } from "../controller/commentController";

const commRoutes = express.Router();

commRoutes.post("/create",addComment);
commRoutes.get("/getAllComment",getAllComment);
export default commRoutes;