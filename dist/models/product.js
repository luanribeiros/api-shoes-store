"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mongoose = _interopRequireDefault(require("mongoose"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const schema = new _mongoose.default.Schema({
  url: String,
  name: String,
  description: String,
  price: Number
});

const Product = _mongoose.default.model('Product', schema);

var _default = Product;
exports.default = _default;