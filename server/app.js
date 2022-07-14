const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Lecture = require("./models/lecture.model");
require("dotenv").config();
const Assignment = require("./models/assignment.model");
const bodyParser = require("body-parser");
const app = express();

app.use(express.json());
app.use(cors());


app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

let connect =()=>{
return mongoose
    .connect(
     process.env.MONGO_URI
    )
    .then(() => {
      console.log("Ho gya");
    })
    .catch((err) => {
      console.log("err ho gya:", err);
    });

} 





const port = process.env.PORT || 4500;

app.get("/", (req, res) => {
  res.send("Hello");
});


app.post("/assignmentss", async (req, res) => {
  try {
    const lecture = await Assignment.create(req.body);

   return res.status(201).send(lecture);
  } catch (e) {
   return res.status(500).json({ status: "Failed", message: e.message });
  }
});

app.get("/assignmentss", async (req, res) => {
  const cart = await Assignment.find();
  res.send(cart);
});

app.delete("/assignmentss/:id", async (req, res) => {
  const cart = await Assignment.findByIdAndDelete(req.params.id);
 res.send(cart);
});
app.patch("/assignmentss/:id", async (req, res) => {
  try {
    const login = await Assignment.findByIdAndUpdate(req.params.id, req.body);
    res.status(201).send(login);
  } catch (e) {
     res.status(500).json({
      message: e.message,
      status: "Failed",
    });
  }
});

app.post("/lecturess", async (req, res) => {
  try {
    const lecture = await Lecture.create(req.body);

     return res.status(201).send(lecture);
  } catch (e) {
    return res.status(500).json({ status: "Failed", message: e.message });
  }
});

app.get("/lecturess", async (req, res) => {
  const cart = await Lecture.find();
   res.send(cart);
});

app.delete("/lecturess/:id", async (req, res) => {
  const cart = await Lecture.findByIdAndDelete(req.params.id);
 res.send(cart);
});
app.patch("/lecturess/:id", async (req, res) => {
  try {
    const login = await Lecture.findByIdAndUpdate(req.params.id, req.body);
   res.status(201).send(login);
  } catch (e) {
    res.status(500).json({
      message: e.message,
      status: "Failed",
    });
  }
});




app.listen(port, async (req, res) => {
  await connect();

  console.log(`Listening on PORT ${port}`);
});


