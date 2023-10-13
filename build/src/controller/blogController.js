"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewOneBlog = exports.viewAllBlogs = exports.updateBlog = exports.deleteBlog = exports.createBlog = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _blogModel = _interopRequireDefault(require("../models/blogModel"));
var _cloud = require("../helper/cloud");
// https://res.cloudinary.com/ddlzcnyhe/image/upload/v1696595213/cld-sample.jpg

var createBlog = exports.createBlog = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _result, _result2, _req$body, blogImage, title, header, contents, checkTitle, result, blog;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, blogImage = _req$body.blogImage, title = _req$body.title, header = _req$body.header, contents = _req$body.contents;
          _context.next = 4;
          return _blogModel["default"].findOne({
            email: req.body.title
          });
        case 4:
          checkTitle = _context.sent;
          if (!checkTitle) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(500).json({
            status: 500,
            message: "Blog With This Title Already Exist, Try Another!"
          }));
        case 7:
          if (!req.file) {
            _context.next = 11;
            break;
          }
          _context.next = 10;
          return (0, _cloud.uploadToCloud)(req.file, res);
        case 10:
          result = _context.sent;
        case 11:
          blog = _blogModel["default"].create({
            blogImage: ((_result = result) === null || _result === void 0 ? void 0 : _result.secure_url) || "https://res.cloudinary.com/ddlzcnyhe/image/upload/v1696595213/cld-sample.jpg",
            title: title,
            header: header,
            contents: contents,
            author: req.userTable.lname
          });
          return _context.abrupt("return", res.status(200).json({
            message: "Blog Created SuccessFully.",
            data: {
              blogImage: (_result2 = result) === null || _result2 === void 0 ? void 0 : _result2.secure_url,
              title: title,
              header: header,
              contents: contents,
              author: req.userTable.lname
            }
          }));
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            message: "Failed To Create A Blog!",
            error: _context.t0.message
          }));
        case 18:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 15]]);
  }));
  return function createBlog(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

// view all blogs
var viewAllBlogs = exports.viewAllBlogs = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var viewblogs;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _blogModel["default"].find();
        case 3:
          viewblogs = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: "200",
            message: "All Blogs Retrieved, Check Below:",
            data: viewblogs
          }));
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            statusbar: "500",
            message: "Failed To Retrieve Users Information",
            error: _context2.t0.message
          }));
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function viewAllBlogs(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//   View One Blog
var viewOneBlog = exports.viewOneBlog = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, viewblog;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          id = req.params.id;
          _context3.next = 4;
          return _blogModel["default"].findById(id);
        case 4:
          viewblog = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            status: "200",
            message: "A Blog Retrieved, Check Below:",
            data: viewblog
          }));
        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            statusbar: "500",
            message: "Failed To Retrieve Blog Information",
            error: _context3.t0.message
          }));
        case 11:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 8]]);
  }));
  return function viewOneBlog(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//   update blog
var updateBlog = exports.updateBlog = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var _result3, _result4, id, checkId, _req$body2, blogImage, title, header, contents, result, blog;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _blogModel["default"].findById(id);
        case 4:
          checkId = _context4.sent;
          if (checkId) {
            _context4.next = 7;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Id Do Not Correspond To Any Blog!"
          }));
        case 7:
          ;
          _req$body2 = req.body, blogImage = _req$body2.blogImage, title = _req$body2.title, header = _req$body2.header, contents = _req$body2.contents;
          if (!req.file) {
            _context4.next = 13;
            break;
          }
          _context4.next = 12;
          return (0, _cloud.uploadToCloud)(req.file, res);
        case 12:
          result = _context4.sent;
        case 13:
          blog = _blogModel["default"].findByIdAndUpdate(id, {
            blogImage: ((_result3 = result) === null || _result3 === void 0 ? void 0 : _result3.secure_url) || "https://res.cloudinary.com/ddlzcnyhe/image/upload/v1696595213/cld-sample.jpg",
            title: title,
            header: header,
            contents: contents,
            author: req.userTable.lname
          });
          return _context4.abrupt("return", res.status(200).json({
            message: "Blog Updated SuccessFully, Check Below:",
            data: {
              blogImage: (_result4 = result) === null || _result4 === void 0 ? void 0 : _result4.secure_url,
              title: title,
              header: header,
              contents: contents,
              author: req.userTable.lname
            }
          }));
        case 17:
          _context4.prev = 17;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            message: "Failed To Update A Blog!",
            error: _context4.t0.message
          }));
        case 20:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 17]]);
  }));
  return function updateBlog(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// delete A blog
var deleteBlog = exports.deleteBlog = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var id, checkId, delBlog;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          id = req.params.id;
          _context5.next = 4;
          return _blogModel["default"].findById(id);
        case 4:
          checkId = _context5.sent;
          if (checkId) {
            _context5.next = 7;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Id not Found"
          }));
        case 7:
          _context5.next = 9;
          return _blogModel["default"].findByIdAndDelete(id);
        case 9:
          delBlog = _context5.sent;
          return _context5.abrupt("return", res.status(201).json({
            statusbar: "Succcess",
            message: "Blog  Deleteded Sucessfully, See Deleted Blog Below: ",
            data: delBlog
          }));
        case 13:
          _context5.prev = 13;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            message: "Failed To Delete Blog!",
            error: _context5.t0.message
          }));
        case 16:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 13]]);
  }));
  return function deleteBlog(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
//# sourceMappingURL=blogController.js.map