const express = require("express");
const app = express();

app.use("/", (req, res) => {
  console.log("You have reached the backend server!");
});

app.listen("5000", () => {
  console.log("Server running on PORT 5000...");
});
