const express = require("express");
const cors = require("cors");
const app = express();
// এখানে process.env.PORT use করার কারণ হলো যখন আমরা ‍ server Deploy করবো, যেখানে deploy করবো সেখানে যে Available Port আছে সেখান থেকে Access করবে।
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "Shahin", email: "shain@gmail.com" },
  { id: 2, name: "mim", email: "mim@gmail.com" },
  { id: 3, name: "jui", email: "jui@gmail.com" },
  { id: 4, name: "akbor", email: "akbor@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("User Management server is Running");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/user", (req, res) => {
  const user = req.body;
  res.send(user);
  console.log(user);
});

app.listen(port, () => {
  console.log(`Server is running port on ${port}`);
});
