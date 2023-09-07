import "./App.css";
import { useState, useEffect } from "react";
import Header from "./companents/Header";
import products from "./product.json";
import Product from "./companents/Product";

function App() {
  const [money, setMoney] = useState(100);
  const [basket, setBasket] = useState([]);

  useEffect(() => {
    console.log(basket);
  }, [basket]);

  return (
    <div>
      <Header money={money} />
      {products.map((product) => (
        <Product
          key={product.id} // Her bir ürün için benzersiz bir key
          basket={basket}
          setBasket={setBasket}
          product={product}
        />
      ))}
    </div>
  );
}

export default App;
