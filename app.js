const express = require("express");


const app = express();

app.use(require("cors"));


app.get("/", (r, j) => j.send("this is just a tes"));


app.listen(process.env.PORT|| 5000, ()=> console.log("hello"))
