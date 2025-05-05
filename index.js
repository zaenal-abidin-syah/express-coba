const express = require("express");
// const cors = require("cors");
const app = express();
const port = 3000;

// app.use(cors());
app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/api", (req, res) => {
  res.json({ message: "Hello from the API!" });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
