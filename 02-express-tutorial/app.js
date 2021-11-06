const express = require("express");
const { products } = require("./data");
const app = express();

app.get("/", (req, res) => {
  res.json(products);
});

app.listen(5000, () => {
  console.log(`SERVER IS LISTENING ON PORT ${5000}....`);
});
