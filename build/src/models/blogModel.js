"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var blogStructure = new _mongoose["default"].Schema({
  blogImage: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  header: {
    type: String,
    required: true
  },
  contents: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: false
  }
}, {
  timestamps: true
});
var blogTable = _mongoose["default"].model("blog", blogStructure);
var _default = exports["default"] = blogTable;
//# sourceMappingURL=blogModel.js.map