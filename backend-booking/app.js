const expressFunction = require("express");
const mongoose = require("mongoose");
var expresApp = expressFunction();

const url = "mongodb://localhost:27017/register";
//const url = "mongodb://localhost:27017/booking";

const config = {
  autoIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//midlewere จะสามมารถทำงานได้ก่อนเพื่อน
expresApp.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:4200");
  res.setHeader("Access-Control-Allow-Methods","POST,GET,PUT,PATCH,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers","Content-Type, Option, Authorization");
  return next();
});

expresApp.use(expressFunction.json());

//midlewere ใช้สำหรับ Connet
expresApp.use((req, res, next) => {
  mongoose
    .connect(url, config)
    .then(() => {
      console.log("Connected to MongoDB....");
      next();
    })
    .catch(() => {
      console.log("Cannot connect to MongoDB");
      res.status(501).send("Cannot connect to MongoDB");
    });
});

expresApp.use("/user", require("./routes/user"));
expresApp.use("/login", require("./routes/signin"));
expresApp.use("/api", require("./api/product"));


//เริ่มทำงานที่ port 3000
expresApp.listen(3000, function () {
  console.log("Listening on port 3000");
});
