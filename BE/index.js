const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const product = [
  { id: 1, name: "Beras", price: 10000 },
  { id: 2, name: "Gula", price: 12000 },
  { id: 3, name: "Minyak Goreng", price: 15000 },
];

app.get("/products", (req, res) => {
  res.json(product);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
