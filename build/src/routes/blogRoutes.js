"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _blogController = require("../controller/blogController");
var _multer = _interopRequireDefault(require("../helper/multer"));
var _authentication = _interopRequireDefault(require("../middleware/authentication"));
var routeBlog = _express["default"].Router();
routeBlog.post("/create", _authentication["default"], _multer["default"].single("blogImage"), _blogController.createBlog);
routeBlog.get("/viewBlogs", _blogController.viewAllBlogs);
routeBlog.get("/viewBlog/:id", _blogController.viewOneBlog);
routeBlog.put("/update/:id", _authentication["default"], _multer["default"].single("blogImage"), _blogController.updateBlog);
routeBlog["delete"]("/delete/:id", _authentication["default"], _multer["default"].single("blogImage"), _blogController.deleteBlog);
var _default = exports["default"] = routeBlog;
//# sourceMappingURL=blogRoutes.js.map