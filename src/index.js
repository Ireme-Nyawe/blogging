import app from "./app";
import mongoose from "mongoose";

mongoose.set("strictQuery",false);
mongoose.connect(process.env.Dbc).then(()=>{
    console.log("Good Job, You are Connected To DB");
})
.catch((err)=> console.log(err));

const PORT = process.env.PORT || 3900;

app.listen(process.env.PORT,() => {
    console.log(`server running on Port: http://localhost:${PORT}`);
});
