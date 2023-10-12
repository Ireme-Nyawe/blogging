import express from "express";
import { createAccount, deleteUser, login, updateUser, viewAllUsers, viewOneUser} from "../controller/usersController";
import uploadfile from "../helper/multer";


const routeUser = express.Router();
routeUser.post("/signUp", uploadfile.single("profile"),createAccount);
routeUser.post("/login",uploadfile.single("profile"), login);
routeUser.get("/viewUsers", viewAllUsers);
routeUser.get("/viewUser/:id", viewOneUser);
routeUser.put("/update/:id",uploadfile.single("profile"), updateUser);
routeUser.delete("/delete/:id", deleteUser);


export default routeUser;