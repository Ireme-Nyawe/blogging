"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewOneUser = exports.viewAllUsers = exports.updateUser = exports.login = exports.deleteUser = exports.createAccount = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _usersModel = _interopRequireDefault(require("../models/usersModel"));
var _cloud = require("../helper/cloud");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
var _bcrypt = _interopRequireWildcard(require("bcrypt"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
//  Registering New User

var createAccount = exports.createAccount = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, fname, lname, email, password, profile, checkEmail, userprof, _userprof, encryptpass, hashedpass, signUp;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, fname = _req$body.fname, lname = _req$body.lname, email = _req$body.email, password = _req$body.password, profile = _req$body.profile;
          _context.next = 4;
          return _usersModel["default"].findOne({
            email: req.body.email
          });
        case 4:
          checkEmail = _context.sent;
          if (!checkEmail) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(500).json({
            status: 500,
            message: "Account already created, Try Another!"
          }));
        case 7:
          if (!req.file) {
            _context.next = 21;
            break;
          }
          _context.next = 10;
          return (0, _cloud.uploadToCloud)(req.file, res);
        case 10:
          userprof = _context.sent;
          _context.next = 13;
          return _bcrypt["default"].genSalt(10);
        case 13:
          encryptpass = _context.sent;
          _context.next = 16;
          return _bcrypt["default"].hash(password, encryptpass);
        case 16:
          hashedpass = _context.sent;
          _context.next = 19;
          return _usersModel["default"].create({
            fname: fname,
            lname: lname,
            email: email,
            password: hashedpass,
            profile: (_userprof = userprof) === null || _userprof === void 0 ? void 0 : _userprof.secure_url
          });
        case 19:
          signUp = _context.sent;
          return _context.abrupt("return", res.status(201).json({
            status: "201",
            message: "Good Job, User Registered Succcessfull.",
            data: signUp
          }));
        case 21:
          _context.next = 26;
          break;
        case 23:
          _context.prev = 23;
          _context.t0 = _context["catch"](0);
          return _context.abrupt("return", res.status(500).json({
            status: "500",
            message: "User registration failed",
            error: _context.t0.message
          }));
        case 26:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 23]]);
  }));
  return function createAccount(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

//  Login Process

var login = exports.login = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var check, checkPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _usersModel["default"].findOne({
            email: req.body.email
          });
        case 3:
          check = _context2.sent;
          if (check) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            status: "404",
            message: "Invalid User"
          }));
        case 6:
          _context2.next = 8;
          return _bcrypt["default"].compare(req.body.password, check.password);
        case 8:
          checkPassword = _context2.sent;
          if (checkPassword) {
            _context2.next = 11;
            break;
          }
          return _context2.abrupt("return", res.status(404).json({
            status: "404",
            message: "Imvalid Password"
          }));
        case 11:
          _context2.next = 13;
          return _jsonwebtoken["default"].sign({
            id: check._id
          }, process.env.JWT_SECRET, {
            expiresIn: process.env.EXPIREDTIME
          });
        case 13:
          token = _context2.sent;
          return _context2.abrupt("return", res.status(200).json({
            status: "200",
            message: "User Successful Logged In",
            users: check,
            token: token
          }));
        case 17:
          _context2.prev = 17;
          _context2.t0 = _context2["catch"](0);
          return _context2.abrupt("return", res.status(500).json({
            status: "500",
            message: "Login Failed, Try Again!",
            error: _context2.t0.message
          }));
        case 20:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 17]]);
  }));
  return function login(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

//   View All Registered User!
var viewAllUsers = exports.viewAllUsers = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var viewUsers;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _usersModel["default"].find();
        case 3:
          viewUsers = _context3.sent;
          return _context3.abrupt("return", res.status(200).json({
            status: "200",
            message: "All Users Retrieved, Check Below:",
            data: viewUsers
          }));
        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](0);
          return _context3.abrupt("return", res.status(500).json({
            statusbar: "500",
            message: "Failed To Retrieve Users Information",
            error: _context3.t0.message
          }));
        case 10:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 7]]);
  }));
  return function viewAllUsers(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

//   View All One User!
var viewOneUser = exports.viewOneUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id, viewUser;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          id = req.params.id;
          _context4.next = 4;
          return _usersModel["default"].findById(id);
        case 4:
          viewUser = _context4.sent;
          return _context4.abrupt("return", res.status(200).json({
            status: "200",
            message: "Users With That Id Retrieved, Check Below:",
            data: viewUser
          }));
        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](0);
          return _context4.abrupt("return", res.status(500).json({
            statusbar: "500",
            message: "Failed To Retrieve User Information",
            error: _context4.t0.message
          }));
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 8]]);
  }));
  return function viewOneUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

// Updating Users' Information
var updateUser = exports.updateUser = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var _req$body2, fname, lname, email, password, profile, id, checkEmail, upUser, userprof, _userprof2, encryptpass, hashedpass, update;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _req$body2 = req.body, fname = _req$body2.fname, lname = _req$body2.lname, email = _req$body2.email, password = _req$body2.password, profile = _req$body2.profile;
          id = req.params.id;
          _context5.next = 5;
          return _usersModel["default"].findOne({
            email: req.body.email
          });
        case 5:
          checkEmail = _context5.sent;
          if (!checkEmail) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", res.status(500).json({
            status: 500,
            message: "Account already created, Try Another!"
          }));
        case 8:
          _context5.next = 10;
          return _usersModel["default"].findById(id);
        case 10:
          upUser = _context5.sent;
          if (upUser) {
            _context5.next = 13;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            status: "404",
            message: "Id Not Found"
          }));
        case 13:
          if (!req.file) {
            _context5.next = 27;
            break;
          }
          _context5.next = 16;
          return (0, _cloud.uploadToCloud)(req.file, res);
        case 16:
          userprof = _context5.sent;
          _context5.next = 19;
          return _bcrypt["default"].genSalt(10);
        case 19:
          encryptpass = _context5.sent;
          _context5.next = 22;
          return _bcrypt["default"].hash(password, encryptpass);
        case 22:
          hashedpass = _context5.sent;
          _context5.next = 25;
          return _usersModel["default"].findByIdAndUpdate(id, {
            fname: fname,
            lname: lname,
            email: email,
            password: hashedpass,
            profile: (_userprof2 = userprof) === null || _userprof2 === void 0 ? void 0 : _userprof2.secure_url
          });
        case 25:
          update = _context5.sent;
          return _context5.abrupt("return", res.status(201).json({
            status: "201",
            message: "Good Job, User update Succcessfull.",
            data: update
          }));
        case 27:
          _context5.next = 32;
          break;
        case 29:
          _context5.prev = 29;
          _context5.t0 = _context5["catch"](0);
          return _context5.abrupt("return", res.status(500).json({
            status: "500",
            message: "User update failed",
            error: _context5.t0.message
          }));
        case 32:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 29]]);
  }));
  return function updateUser(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

// delete An User
var deleteUser = exports.deleteUser = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    var id, checkId, delUser;
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          id = req.params.id;
          _context6.next = 4;
          return _usersModel["default"].findById(id);
        case 4:
          checkId = _context6.sent;
          if (checkId) {
            _context6.next = 7;
            break;
          }
          return _context6.abrupt("return", res.status(404).json({
            message: "Id not Found"
          }));
        case 7:
          _context6.next = 9;
          return _usersModel["default"].findByIdAndDelete(id);
        case 9:
          delUser = _context6.sent;
          return _context6.abrupt("return", res.status(201).json({
            statusbar: "Succcess",
            message: "User  Deleteded Sucessfully, See Deleted User Below: ",
            data: delUser
          }));
        case 13:
          _context6.prev = 13;
          _context6.t0 = _context6["catch"](0);
          return _context6.abrupt("return", res.status(500).json({
            message: "Failed To Delete User!",
            error: _context6.t0.message
          }));
        case 16:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 13]]);
  }));
  return function deleteUser(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
//# sourceMappingURL=usersController.js.map