const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
require("dotenv").config();

const KhachHang = require("../models/khachhang.model");
const User = require("../models/user.model");

module.exports.getIdKhachHang = async function (req, res) {
  var khachhang = await KhachHang.find({ username: req.params.id });
    // .then((kh) => {
    //   if (kh) {
    //     return res.json({ id: kh[0]._id });
    //   }
    // })
    // .catch((err) => {
    //   console.log("loi getidkhachhang:",err);
    // });
  if(khachhang.length>0){
      return res.json({id:khachhang[0]._id});
  }
  return res.json({ id: null });
};

module.exports.getKhachHang = async function (req, res) {
  let khachhang = await KhachHang.find({ _id: req.params.id });
  if (khachhang.length > 0) {
    return res.json({
      khachhang: khachhang,
    });
  } else {
    return res.json({
      khachhang: null,
    });
  }
};

module.exports.updateCustomer = async function (req, res) {
  if (req.body.password === undefined) {
    let khachhang = await KhachHang.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      birthday: req.body.birthday,
      phone: req.body.phone,
      address: req.body.address,
    });
    khachhang.save();
  } else {
    var encryptPassword = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString();
    let khachhang = await KhachHang.findByIdAndUpdate(req.body.id, {
      name: req.body.name,
      birthday: req.body.birthday,
      phone: req.body.phone,
      address: req.body.address,
      password: encryptPassword,
    });
    let user = await User.findOneAndUpdate(
      { username: req.body.user },
      {
        password: encryptPassword,
      },
      { new: true }
    );
    user.save();
    khachhang.save();
  }

  return res.json({
    update: "success",
  });
};
