const SanPham = require("../models/sanpham.model");

const mongoose = require("mongoose");

module.exports.bestSeller = async function(req,res){
    const Product = await SanPham.find({});
    return res.json(Product);
}

module.exports.detailProduct = async function(req,res){
    const id = req.params.id;
    const Product = await SanPham.find({_id:id});
    return res.json(Product);
}