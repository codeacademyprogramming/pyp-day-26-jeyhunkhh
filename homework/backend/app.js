const express = require("express");
const fs = require("fs");

const app = express();

app.get("/room", function (res, resp) {
  const rooms = require("./data/db.json");

  resp.json(rooms);
});

app.listen(5000, () => {
  console.log("Api working...");
});
