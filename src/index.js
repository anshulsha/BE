const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const new_data_controller = require("./new_data_controller");
//middlewares
app.use(
  cors({
    origin: "*",
  })
);

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// app.use("/new-user", new_data_controller);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Connected to Backend! on PORT ${PORT}`);
});

app.post("/", (req, res) => {
  try {
    console.log(req.body);
    new_data_controller(req.body);
    res.status(200).send("Success");
  } catch (err) {
    console.log(err);
    res.status(400).send("Failed");
  }
});
