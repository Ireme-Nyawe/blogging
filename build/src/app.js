"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));
var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));
var _blogRoutes = _interopRequireDefault(require("./routes/blogRoutes"));
var _userRoutes = _interopRequireDefault(require("./routes/userRoutes"));
// importing routes

var app = (0, _express["default"])();

// configuration
// configuration of swagger
var options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'APIs Documentation',
      version: '1.0.0'
    },
    servers: [{
      url: 'http://localhost:4000/'
    }]
  },
  apis: ['./src/Docs/*.js'] //  Determining pa
};

var swaggerSpec = (0, _swaggerJsdoc["default"])(options);
app.use("/docs/", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(swaggerSpec));
// dependences configuraion
_dotenv["default"].config();
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_bodyParser["default"].json());
app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
//routes
app.use("/api/cohort/blog", _blogRoutes["default"]);
app.use("/api/cohort/user", _userRoutes["default"]);

// test API
app.get("/", function (req, res) {
  res.status(200).json({
    status: "Well Done",
    author: "AKIMANA",
    message: "Hello, My API is on Set"
  });
});
var _default = exports["default"] = app;
//# sourceMappingURL=app.js.map