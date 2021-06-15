var expressFunction = require("express");
const router = expressFunction.Router();
const authorization = require('../config/authorize')

const products = [
  {
    type: "cpu",
    id: "100001",
    name: "Intel Core i7 Gen10th",
    detail:
      "The intel i7-10750H is a high-end processor for labtops with six cores based on the Comet Lake architecture",
    quantity: 10,
    price: 10,
  },
];
 //ใช้สำหรับดึงข้อมูลไปใช้งาน
router.route("/products")
.get(authorization, (req, res) => {
  console.log("Get All Product");
  res.status(200).json(products);
});

module.exports = router;
