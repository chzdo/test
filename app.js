const express = require("express");
const cron = require("node-cron");
const http = require("http");
const axios = require("axios");
cron.schedule("30 * * * *", () => {
    console.log("running cron")
    axios.get("https://starswarapp.herokuapp.com").then((data)=> console.log(data))
})


const app = express();




app.listen(process.env.PORT || 5000, () => console.log(`port -${process.env.PORT}`))

