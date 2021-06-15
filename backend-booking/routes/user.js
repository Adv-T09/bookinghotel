var expressFunction = require("express");
const router = expressFunction.Router();
const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");  //การเข้ารห

var Schema = require("mongoose").Schema;

const userSchema = Schema(
  {
    username: String,
    password: String,
    type: String,
    fname: String,
    lname: String,
    email: String,
    phone: Number,
    img: String,
  },
  {
    collection: "users",
  }
);

let User;
try {
  User = mongoose.model("users");
} catch (error) {
  User = mongoose.model("users", userSchema);
}

const makeHash = async (plainText) => {
  const result = await bcrypt.hash(plainText, 10);
  return result;
};

//เพิ่มข้อมูลงใน MongoDB
const insertUser = async (dataUser) => {
  return new Promise((resolve, reject) => {
    var new_user = new User({
      username: dataUser.username,
      password: dataUser.password,
      type:   dataUser.type,
      fname:  dataUser.fname,
      lname: dataUser.lname,
      email:  dataUser.email,
      phone:  dataUser.phone,
      img:    dataUser.img,
      role: dataUser.role,
    });

    new_user.save((err, data) => {
      if (err) {
        reject(new Error("Cannot insert User to DB"));
      } else {
        resolve({ message: "Register Successfully" });
      }
    });
  });
};

router.route("/signup").post((req, res) => {
  makeHash(req.body.password)
    .then((hashText) => {
      const payload = { //ดึงข้อมูล
        username: req.body.username,
        password: hashText,
        type:   req.body.type,
        fname:  req.body.fname,
        lname:  req.body.lname,
        email:  req.body.email,
        phone:  req.body.phone,
        img:    req.body.img,

      };
      console.log(payload);
      
      //เพิ่มข้อมูลงใน MongoDB
      insertUser(payload)
        .then((result) => {
          console.log(result);
          res.status(200).json(result);
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
