const maGiamGia = require("../models/magiamgia.model");

const mongoose = require('mongoose');

module.exports.addCoupon =async function(req,res){
    console.log(req.body.code);
    let magiamgia = await maGiamGia.find({code:req.body.code});
    if(req.body.code===""){
        return res.json({
            check:"fail"
        });
    }
    if(magiamgia.length===0){
        return res.json({
            check:"fail"
        });
    }
    else{
        await maGiamGia.deleteOne({code:req.body.code});
        return res.json({
            check:"success"
        });
    }
    
}
