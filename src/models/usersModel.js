import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fname: {
        type : String,
        required : true,  
    },
    lname: {
        type : String,
        required : true,  
    },
    email: {
        type : String,
        required : true,  
    },
    password: {
        type : String,
        required : true,  
    },
    profile: {
        type : String,
        required : false,  
    },
    role: {
        type : String,
        required : true, 
        enum : ["user","admin"],
        default : "user", 
    },
});

const userTable = mongoose.model("users",userSchema);

export default userTable