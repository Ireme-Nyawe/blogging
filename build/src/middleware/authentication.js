"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _usersModel = _interopRequireDefault(require("../models/usersModel"));
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
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
var Authorization = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res, next) {
    var token, decoded, logedUser;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            token = req.headers.authorization.split(" ")[1];
          }
          if (!token) {
            res.status(404).json({
              status: "404",
              message: "You Are Not Logged In Please login"
            });
          }
          _context.next = 5;
          return _jsonwebtoken["default"].verify(token, process.env.JWT_SECRET);
        case 5:
          decoded = _context.sent;
          _context.next = 8;
          return _usersModel["default"].findById(decoded.id);
        case 8:
          logedUser = _context.sent;
          if (!logedUser) {
            res.status(403).json({
              status: "403",
              message: "Token has Expired Please login Again"
            });
          }
          if (logedUser.role !== "user") {
            res.status(404).json({
              status: "404",
              message: "Only Loged User can do this operation"
            });
          } else {
            req.userTable = logedUser;
            next();
          }
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            status: "500",
            error: _context.t0.message
          });
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return function Authorization(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();
var _default = exports["default"] = Authorization;
//# sourceMappingURL=authentication.js.map