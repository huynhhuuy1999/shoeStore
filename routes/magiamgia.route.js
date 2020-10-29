const express = require("express");

const controller = require("../controllers/magiamgia.controller");

const router = express.Router();
router.post("/addcoupon",controller.addCoupon);

module.exports = router;