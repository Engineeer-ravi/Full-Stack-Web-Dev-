
const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/register", (req, res) => {
    let { Username,Password } = req.query;
    res.send(`standard Get response .Welcome ${Username}`);
});

app.post("/register", (req, res) => {
    let { Username,Password }=req.body;
    res.send(`standard Post response.Welcome ${Username}!`);
});

app.listen(port, () => {
    console.log(`listing to port ${port}`);
});