const express = require("express")
const router = express.Router()

module.exports =  router

router.post("/requestFund", (req, res) => {
    res.status(500).send("Not implemented ")
})
router.post("/Error", (req, res) => {
    res.status(500).send("Not implemented ")
})


