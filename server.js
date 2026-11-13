const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("BuzzUpdate Backend is Running!");
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("BuzzUpdate is running!");
});
