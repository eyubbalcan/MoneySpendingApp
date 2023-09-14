import "./App.css";
import { useState, useEffect } from "react";
import Header from "./companents/Header";
import products from "./product.json";
import Product from "./companents/Product";
import Basket from "./companents/Basket";

function App() {
  const [money, setMoney] = useState(1000000);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState(0);

  const resetBasket = () => {
    setBasket([]);
  };

  useEffect(() => {
    setTotal(
      basket.reduce((acc, item) => {
        return (
          acc +
          item.amount * products.find((product) => product.id === item.id).price
        );
      }, 0)
    );
  }, [basket]);

  return (
    <div>
      <Header total={total} money={money} />
      <div className="container products">

        {products.map((product) => (
          <Product
            key={product.id} // Her bir ürün için benzersiz bir key
            total={total}
            money={money}
            basket={basket}
            setBasket={setBasket}
            product={product}
          />
        ))}
      </div>

      <div>
        <Basket
          products={products}
          basket={basket}
          total={total}
          resetBasket={resetBasket}
        />
      </div>
    </div>
  );
}

export default App;
