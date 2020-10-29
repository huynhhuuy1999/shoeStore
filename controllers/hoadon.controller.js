const { json } = require("body-parser");
const mongoose = require("mongoose");
const randomString = require("randomstring");

const HoaDon = require("../models/hoadon.model");
const MaGiamGia = require("../models/magiamgia.model");

module.exports.addOrder = async function (req, res) {
  let listProduct = req.body.listProduct;
  let idNewHoaDon = "";
  var hoadon = new HoaDon({
    _id: new mongoose.mongo.ObjectId(),
    idKhachHang: req.body.idKhachHang,
    sumPrice: req.body.sumPrice,
    orderDate: req.body.orderDate,
    deliveryDate: null,
    receiveDate: null,
    product: listProduct,
    status: "Chưa xác nhận",
    nameReceive: req.body.nameReceive,
    phoneReceive: req.body.phoneReceive,
    addressReceive: req.body.addressReceive,
    moneyCoupon: req.body.moneyCoupon,
  });
  hoadon.save(function (err, hoadon) {
    if (err) {
      return res.json({ order: "fail" });
    }
    idNewHoaDon = hoadon._id;
  });
  let magiamgia = await MaGiamGia.find({});
  // await console.log(magiamgia)
  let code = await randomString.generate(7);
  if (magiamgia.length > 0) {
    while (magiamgia.find((element) => element.code === code) !== undefined) {
      code = randomString.generate(7);
    }
  }

  var ma = new MaGiamGia({
    _id: new mongoose.mongo.ObjectId(),
    code: code,
  });

  ma.save(function (err, ma) {
    if (err) {
      console.log(err);
      // return res.json({
      //   coupon:"fail"
      // });
    }
  });

  return res.json({ order: "success", idNewHoaDon: idNewHoaDon });
};

module.exports.getDetailOrder =async (req,res)=>{
  let hoadon = await HoaDon.find({_id:req.params.id});
  
  if(hoadon.length>0){
    return res.json({
      hoadon:hoadon
    });
  }
  else{
    return res.json({
      hoadon:null
    });
  }
}

module.exports.getListOrder = async (req,res)=>{
  let hoadon = await HoaDon.find({idKhachHang:req.params.id});
  if(hoadon.length>0){
    return res.json({
      hoadon:hoadon
    });
  }
  return res.json({
    hoadon:null
  });
} 