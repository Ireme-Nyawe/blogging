"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
var _mongoose = _interopRequireDefault(require("mongoose"));
_mongoose["default"].set("strictQuery", false);
_mongoose["default"].connect(process.env.Dbc).then(function () {
  console.log("Good Job, You are Connected To DB");
})["catch"](function (err) {
  return console.log(err);
});
var PORT = process.env.PORT || 3900;
_app["default"].listen(process.env.PORT, function () {
  console.log("server running on Port: http://localhost:".concat(PORT));
});
//# sourceMappingURL=index.js.map