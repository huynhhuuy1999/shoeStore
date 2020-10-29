require("dotenv").config();

const path = require("path");

const express = require("express");
const cors = require('cors');
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const port = 9080;
const app = express();



mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });

const sanphamRoute = require("./routes/sanpham.route");
const userRoute = require('./routes/user.router');
const hoadonRoute = require("./routes/hoadon.route");
const khachhangRoute = require("./routes/khachhang.route");
const magiamgiaRoute = require("./routes/magiamgia.route");

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.use(cors());

app.use("/sanpham",sanphamRoute);
app.use("/user",userRoute);
app.use("/order",hoadonRoute);
app.use("/khachhang",khachhangRoute);
app.use("/magiamgia",magiamgiaRoute);



app.use(express.static(path.join(__dirname,'build')));
app.get('/*',(req, res)=>{
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(port,function(){
    console.log(`Server is starting ${port} ...`);
});