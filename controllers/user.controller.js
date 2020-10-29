const User = require("../models/user.model");
const Khachhang = require("../models/khachhang.model");

const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
require("dotenv").config();

module.exports.register = async function (req, res) {
  let listUser = await User.find({username:req.body.username});
  if(listUser.length>0){
    return res.json({
      create:"fail"
    });
  }
  else{
    var encryptPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
    var user = new User({
      _id: new mongoose.mongo.ObjectId(),
      username: req.body.username,
      password: encryptPassword,
    });
    user.save(function (err, user) {
      if (err) res.json({ create: "fail" });
    });
  
    var khachhang = new Khachhang({
      _id: new mongoose.mongo.ObjectId(),
      name: req.body.name,
      birthday: req.body.birthday,
      phone: req.body.phone,
      address: req.body.address,
      username: req.body.username,
      password: encryptPassword,
    });
    khachhang.save(function (err, khachhang) {
      if (err) return res.json({ create: "fail" });
    });
    return res.json({
      create: "success",
    });
  }
  
};

module.exports.login = async function (req, res) {
  let user = await User.find({ username: req.body.username });
  if (user.length > 0) {
    var bytes = CryptoJS.AES.decrypt(user[0].password, process.env.SECRET_KEY);
    var originalText = bytes.toString(CryptoJS.enc.Utf8);
    if (originalText === req.body.password) {
      return res.json({ login: "success", password: user[0].password });
    } else {
      return res.json({ login: "fail" });
    }
  } else {
    return res.json({ login: "fail" });
  }
};
