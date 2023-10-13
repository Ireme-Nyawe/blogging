import blogTable from "../models/blogModel";
import { uploadToCloud } from "../helper/cloud";
// https://res.cloudinary.com/ddlzcnyhe/image/upload/v1696595213/cld-sample.jpg

export const createBlog = async(req,res) =>{
    try {
        const {blogImage,title,header,contents} = req.body;
        const checkTitle = await blogTable.findOne({
          email: req.body.title,
      });
      
      if(checkTitle){
          return res.status(500).json({
              status : 500,
              message : "Blog With This Title Already Exist, Try Another!", 
          })
      }
        let result;
        if(req.file){
            result = await uploadToCloud(req.file,res);
        }
        const blog = blogTable.create({
                blogImage : result?.secure_url || "https://res.cloudinary.com/ddlzcnyhe/image/upload/v1696595213/cld-sample.jpg",
                title,
                header,
                contents,
                author: req.userTable.lname

            })

            return res.status(200).json({
                message : "Blog Created SuccessFully.",
                data: 
                {
                    blogImage : result?.secure_url,
                title,
                header,
                contents,
                author: req.userTable.lname
                }
            })
    } catch (error) {
        return res.status(500).json({
            message : "Failed To Create A Blog!",
            error : error.message,
        })
    }
};

// view all blogs
export const viewAllBlogs = async (req,res) =>{
    try {
      const viewblogs = await blogTable.find();
      return res.status(200).json({
        status : "200",
        message : "All Blogs Retrieved, Check Below:",
        data : viewblogs,
      })
    } catch (error) {
      return res.status(500).json({
        statusbar: "500",
        message: "Failed To Retrieve Users Information",
        error: error.message,
  
      });
      
    }
  };

//   View One Blog
  export const viewOneBlog = async (req,res) =>{
    try {
        const {id}= req.params;
      const viewblog = await blogTable.findById(id)
      return res.status(200).json({
        status : "200",
        message : "A Blog Retrieved, Check Below:",
        data : viewblog,
      })
    } catch (error) {
      return res.status(500).json({
        statusbar: "500",
        message: "Failed To Retrieve Blog Information",
        error: error.message,
  
      });
      
    }
  };

//   update blog
export const updateBlog = async(req,res) =>{
    try {
        const {id}=req.params;
        const checkId=await blogTable.findById(id);
        if(!checkId){
            return res.status(404).json({
                message : "Id Do Not Correspond To Any Blog!",
            })
        };

        const {blogImage,title,header,contents} = req.body;
        let result;
        if(req.file){
            result = await uploadToCloud(req.file,res);
        }
        const blog = blogTable.findByIdAndUpdate(id,{
                blogImage : result?.secure_url || "https://res.cloudinary.com/ddlzcnyhe/image/upload/v1696595213/cld-sample.jpg",
                title,
                header,
                contents,
                author: req.userTable.lname

            })

            return res.status(200).json({
                message : "Blog Updated SuccessFully, Check Below:",
                data: 
                {
                blogImage : result?.secure_url,
                title,
                header,
                contents,
                author: req.userTable.lname
                }
            })
    } catch (error) {
        return res.status(500).json({
            message : "Failed To Update A Blog!",
            error : error.message,
        })
    }
};

// delete A blog
export const deleteBlog = async (req, res) => {
    try {
      const { id } = req.params;
      const checkId = await blogTable.findById(id);
      if (!checkId)
        return res.status(404).json({
          message: "Id not Found",
        });
  
      const delBlog = await blogTable.findByIdAndDelete(id);
      return res.status(201).json({
        statusbar: "Succcess",
        message: "Blog  Deleteded Sucessfully, See Deleted Blog Below: ",
        data: delBlog,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Failed To Delete Blog!",
        error: error.message,
      });
    }
  };
