const express = require('express');
const app = express();

app.get('/',  (req, res) => {
    const name = req.query.hasOwnProperty("name") ? req.query.name : "guest";
    return res.send("hello, " + name);
})

app.listen(3000, () => {
    console.log("app listening on port 3000")
})