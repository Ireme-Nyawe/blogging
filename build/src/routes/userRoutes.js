"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _usersController = require("../controller/usersController");
var _multer = _interopRequireDefault(require("../helper/multer"));
var routeUser = _express["default"].Router();
routeUser.post("/signUp", _multer["default"].single("profile"), _usersController.createAccount);
routeUser.post("/login", _multer["default"].single("profile"), _usersController.login);
routeUser.get("/viewUsers", _usersController.viewAllUsers);
routeUser.get("/viewUser/:id", _usersController.viewOneUser);
routeUser.put("/update/:id", _multer["default"].single("profile"), _usersController.updateUser);
routeUser["delete"]("/delete/:id", _usersController.deleteUser);
var _default = exports["default"] = routeUser;
//# sourceMappingURL=userRoutes.js.map