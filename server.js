const express = require("express");

const { resolve } = require("path");

const app = express();

app.use("/", express.static(resolve(__dirname, "./build")));

app.listen(process.env.PORT || 3030, (err) => {
  if (err) {
    return console.log(err);
  }
});
