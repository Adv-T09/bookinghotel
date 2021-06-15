var expressFunction = require("express");
const router = expressFunction.Router();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const key = "MY_KEY";

var Schema = require("mongoose").Schema;

const userSchema = Schema(
  {
    username: String,
    password: String,
    role: String,
    
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

const compareHash = async (plainText, hashText) => {
  return new Promise((reslove, reject) => {
    bcrypt.compare(plainText, hashText, (err, data) => {
      if (err) {
        reject(new Error("Error bcrypt compare"));
      } else {
        reslove({ status: data });
      }
    });
  });
};

const findUser = async (username) => {  
  return new Promise((resolve, reject) => {
    User.findOne({ username: username }, (err, data) => {
      if (err) {
        reject(new Error("Cannot Find username!"));
      } else {
        if (data) {
          resolve({
            id: data.id,
            username: data.username,
            password: data.password,
            //role:data.role,
            
          });
        } else {
          reject(new Error("Cannot Find username!"));
        }
      }
    });
  });
};

router.route("/signin").post(async (req, res) => {
  const payload = {
    username: req.body.username,
    password: req.body.password, 
  };

  console.log(payload);

  try {
    const result = await findUser(payload.username);
    const loginStatus = await compareHash(payload.password, result.password);
    const status = loginStatus.status;
    console.log("re " , result);
    if (status) {
      const token = jwt.sign(result, key, { expiresIn: 60 * 5 });
      res.status(200).json({ result, token, status });
    } else {
      res.status(200).json({ status });
    }
  } catch (error) {
    res.status(404).send(error);
  }
});

module.exports = router;
