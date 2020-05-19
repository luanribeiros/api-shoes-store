"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _products = _interopRequireDefault(require("../controllers/products"));

var _product = _interopRequireDefault(require("../models/product"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const router = _express.default.Router();

const productsController = new _products.default(_product.default);
router.get('/', (req, res) => productsController.get(req, res));
router.get('/:id', (req, res) => productsController.getById(req, res));
router.post('/', (req, res) => productsController.create(req, res));
router.put('/:id', (req, res) => productsController.update(req, res));
router.delete('/:id', (req, res) => productsController.remove(req, res));
var _default = router;
exports.default = _default;