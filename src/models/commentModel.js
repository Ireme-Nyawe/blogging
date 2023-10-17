import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
    commentBody : {
        type : String,
        required : true,

    },
    sender : {
        type : String,
        required : true,
    },
    blog : {
        type : Schema.Types.ObjectId,
        ref : "Blogs",
        required : true,
    }
})
export default commentModel = mongoose.model("comment",commentSchema);