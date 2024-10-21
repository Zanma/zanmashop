import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  const product = [
    {
      id: 1,
      name: "Product 1",
      price: 100,
    },
    {
      id: 2,
      name: "Product 2",
      price: 200,
    },
    {
      id: 3,
      name: "Product 3",
      price: 300,
    },
  ];

  return (
    <div className="App">
      <Dashboard product={product} />
    </div>
  );
}

export default App;
