import userTable from "../models/usersModel";
// import Jwt from "jsonwebtoken";
// const authorization = async(req, res, next) =>{
//     let token;
//     try{
//         if(
//             req.headers.authorization &&
//             req.headers.authorization.startsWith("Bearer ")
//             ){
//                 token = req.headers.authorization.split(" ")[1];
//             }
//         if(!token){
//             res.status("404").json({
//                 status : "You are not logged, Login First",
//             });
//         }

//         const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
//         const loggedUser = await userTable.findById(decoded._id);

//         if(!loggedUser){
//             res.status(403).json({
//                 status : "403",
//                 message : "Token has Expired , login again",
//             });
//         }

//         if(!loggedUser.role !== "user"){
//             res.status(404).json({
//                 status : "404",
//                 message : "Only Logged User Can Do this operation",
//             });
//         }
//         else{
//             req.userTable = loggedUser;
//             next();
//         }
//     }
//     catch(error){
//         res.status(500).json({
//             status : "500",
//             error : error.message
//         })
//     }
// };

// export default authorization;

import Jwt from "jsonwebtoken";
const Authorization = async (req, res, next) => {
  let token;

  try {
    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer ")
    ) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      res.status(404).json({
        status: "404",
        message: "This Operation require login,  Please login",
      });
    }

    const decoded = await Jwt.verify(token, process.env.JWT_SECRET);
    const logedUser = await userTable.findById(decoded.id);

    if (!logedUser) {
      res.status(403).json({
        status: "403",
        message: "Token has Expired Please login Again",
      });
    }

    if (logedUser.role !== "user") {
      res.status(404).json({
        status: "404",
        message: "Only Loged User can do this operation",
      });
    } else {
      req.userTable = logedUser;
      next();
    }

  } catch (error) {
    res.status(500).json({
      status: "500",
      error: error.message,
    });
  }
};

export default Authorization;