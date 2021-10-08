import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Card from "./Card";

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/products/show", { crossdomain: true })
      .then((response) => {
        setItems(response.data.items);
      });
  }, []);
  return (
    <div className="App">
      {items &&
        items.map((item, id) => (
          <Card
            title={item.title}
            price={item.price}
            count={item.count}
            description={item.description}
            key={id}
          />
        ))}
    </div>
  );
}

export default App;
