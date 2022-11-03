const express = require("express");
const router = express.Router()
const Web3= require("web3")

module.exports = router

const app = express();
const web3 = new Web3("http://localhost:9566");

//Accedemos a la cuenta
router.get("/balance/:cuenta" , async (req, res) => {
  const balance = await web3.eth.getBalance(req.params.cuenta);
  res.send({balance:balance}) 
  
});

router.post("/requestFund", (req, res) => {
    res.status(500).send("Not implemented ")
})
router.post("/Error", (req, res) => {
    res.status(500).send("Not implemented ")
})

