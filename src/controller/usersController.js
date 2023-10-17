import userTable from "../models/usersModel";
import { uploadToCloud } from "../helper/cloud";
import Jwt from "jsonwebtoken";
import bcrypt, {gensalt, hash} from "bcrypt";

//  Registering New User

export const createAccount = async(req, res) => {
    try {
        const {fname,lname,email,password,profile} = req.body;
        const checkEmail = await userTable.findOne({
            email: req.body.email,
        });
        
        if(checkEmail){
            return res.status(500).json({
                status : 500,
                message : "Account already created, Try Another!", 
            })
        }
        let userprof;
        if(req.file){
            userprof = await uploadToCloud(req.file, res);
            const encryptpass = await bcrypt.genSalt(10);
            const hashedpass = await bcrypt.hash(password,encryptpass);
            const signUp= await userTable.create(
                {
                    fname,
                    lname,
                    email,
                    password : hashedpass,
                    profile : userprof?.secure_url,
                });

                return res.status(201).json({
                    status : "201",
                    message : "Good Job, User Registered Succcessfull.",
                    data : signUp,
                });
        }
    } 
    catch (error) {
        return res.status(500).json({
            status: "500",
            message: "User registration failed",
            error: error.message,
        });
    }
};


//  Login Process

export const login = async (req, res) => {
    try {
      const check =await userTable.findOne({
        email: req.body.email,
      });
      if(!check){
        return res.status(404).json({
          status: "404",
          message: "Invalid User",
        });
      }
      const checkPassword = await bcrypt.compare(req.body.password, check.password);
      if(!checkPassword){
        return res.status(404).json({
          status: "404",
          message: "Imvalid Password",
        });
      }
      const token = await Jwt.sign(
        { id: check._id},
        process.env.JWT_SECRET,
        { expiresIn: process.env.EXPIREDTIME}
      );
      return res.status(200).json({
        status: "200",
        message: "User Successful Logged In",
        users: check,
        token: token,
      })
    } catch (error) {
      return res.status(500).json({
        status: "500",
        message: "Login Failed, Try Again!",
        error: error.message,
      });
    }
  }

//   View All Registered User!
export const viewAllUsers = async (req,res) =>{
  try {
    const viewUsers = await userTable.find();
    return res.status(200).json({
      status : "200",
      message : "All Users Retrieved, Check Below:",
      data : viewUsers,
    })
  } catch (error) {
    return res.status(500).json({
      statusbar: "500",
      message: "Failed To Retrieve Users Information",
      error: error.message,

    });
    
  }
};

//   View All One User!
export const viewOneUser = async (req,res) =>{
  try {
    const {id} = req.params;
    const viewUser = await userTable.findById(id);
    return res.status(200).json({
      status : "200",
      message : "Users With That Id Retrieved, Check Below:",
      data : viewUser,
    })
  } catch (error) {
    return res.status(500).json({
      statusbar: "500",
      message: "Failed To Retrieve User Information",
      error: error.message,

    });
    
  }
};

// Updating Users' Information
export const updateUser = async(req, res) => {
  try {
      const {fname,lname,email,password,profile} = req.body;
      const {id}= req.params;
      const checkEmail = await userTable.findOne({
          email: req.body.email,
      });
      
      if(checkEmail){
          return res.status(500).json({
              status : 500,
              message : "Account already created, Try Another!", 
          })
      }
      const upUser = await userTable.findById(id);
      if (!upUser) {
        return res.status(404).json({
          status: "404",
          message: "Id Not Found, For Any User!",
        })
        
      }

      let userprof;
      if(req.file){
          userprof = await uploadToCloud(req.file, res);
          const encryptpass = await bcrypt.genSalt(10);
          const hashedpass = await bcrypt.hash(password,encryptpass);
          const update= await userTable.findByIdAndUpdate(id,
              {
                  fname,
                  lname,
                  email,
                  password : hashedpass,
                  profile : userprof?.secure_url,
              });

              return res.status(201).json({
                  status : "201",
                  message : "Good Job, User update Succcessfull.",
                  data : {
                    fname,
                    lname,
                    email,
                    password : hashedpass,
                    profile : userprof?.secure_url,
                },
              });
      }
  } 
  catch (error) {
      return res.status(500).json({
          status: "500",
          message: "User update failed",
          error: error.message,
      });
  }
};

// delete An User
export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const checkId = await userTable.findById(id);
    if (!checkId)
      return res.status(404).json({
        message: "Id not Found",
      });

    const delUser = await userTable.findByIdAndDelete(id);
    return res.status(201).json({
      statusbar: "Succcess",
      message: "User  Deleteded Sucessfully, See Deleted User Below: ",
      data: delUser,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed To Delete User!",
      error: error.message,
    });
  }
};