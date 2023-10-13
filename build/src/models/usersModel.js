"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var userSchema = new _mongoose["default"].Schema({
  fname: {
    type: String,
    required: true
  },
  lname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: false
  },
  role: {
    type: String,
    required: true,
    "enum": ["user", "admin"],
    "default": "user"
  }
});
var userTable = _mongoose["default"].model("users", userSchema);
var _default = exports["default"] = userTable;
//# sourceMappingURL=usersModel.js.map