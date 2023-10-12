import mongoose from "mongoose";

const blogStructure = new mongoose.Schema({
    blogImage : {
        type : String,
        required : true
    },
    title : {
        type : String,
        required : true
    },
    header : {
        type : String,
        required : true
    },
    contents : {
        type : String,
        required : true
    },
    author : {
        type : String,
        required : false
    },
},
{
    timestamps:true
},
);

const blogTable = mongoose.model("blog",blogStructure);
export default blogTable;
