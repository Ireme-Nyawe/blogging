import express from "express";
import { createBlog, deleteBlog, updateBlog, viewAllBlogs, viewOneBlog } from "../controller/blogController";
import uploadfile from "../helper/multer";
import Authorization from "../middleware/authentication";

const routeBlog = express.Router();


routeBlog.post("/create", Authorization,uploadfile.single("blogImage"),createBlog);
routeBlog.get("/viewBlogs", viewAllBlogs);
routeBlog.get("/viewBlog/:id", viewOneBlog);
routeBlog.put("/update/:id", Authorization,uploadfile.single("blogImage"),updateBlog);
routeBlog.delete("/delete/:id",Authorization,uploadfile.single("blogImage"),deleteBlog);


export default routeBlog;



