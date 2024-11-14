import { useEffect, useState } from "react";
import "./App.css";
import Dashboard from "./components/Dashboard";
import axios from "axios";

function App() {
  const [product, setProduct] = useState([]);

  // const product = [
  //   {
  //     id: 1,
  //     name: "Product 1",
  //     price: 100,
  //   },
  //   {
  //     id: 2,
  //     name: "Product 2",
  //     price: 200,
  //   },
  //   {
  //     id: 3,
  //     name: "Product 3",
  //     price: 300,
  //   },
  // ];

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => setProduct(res.data))
      .catch((err) => console.log("err:", err));
  }, []);

  return (
    <div className="App">
      <Dashboard product={product} />
    </div>
  );
}

export default App;
