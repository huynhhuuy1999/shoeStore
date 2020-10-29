const express = require("express");

const controller = require("../controllers/khachhang.controller");

const router = express.Router();
router.get("/getIdCustomer/:id",controller.getIdKhachHang);
router.get("/getkhachhang/:id",controller.getKhachHang);
router.post("/updateCustomer",controller.updateCustomer);

module.exports = router;