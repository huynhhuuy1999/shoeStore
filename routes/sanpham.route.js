const express = require("express");

const controller = require("../controllers/sanpham.controller");

const router = express.Router();
router.get("/bestseller",controller.bestSeller);
router.get("/detail/:id",controller.detailProduct);

module.exports = router;