import React from "react";
import BasketItem from "./BasketItem";

const Basket = ({ basket, products, total, resetBasket }) => {
  return (
    <>
      {total > 0 && (
        <div>
          <div>
            {basket.map((item) => (
              <BasketItem
                item={item}
                product={products.find((p) => p.id === item.id)}
              />
            ))}
          </div>

          <div>Toplam:${total}</div>
          <button onClick={resetBasket}>Sepet sıfırla</button>
        </div>
      )}
    </>
  );
};

export default Basket;
