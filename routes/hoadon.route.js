const express = require("express");

const controller = require("../controllers/hoadon.controller");

const router = express.Router();
router.post("/addorder",controller.addOrder);
router.get("/detailorder/:id",controller.getDetailOrder);
router.get("/getlistorder/:id",controller.getListOrder);

module.exports = router;