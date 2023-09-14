import React from "react";

const BasketItem = ({ product, item }) => {
  return (
    <div>
      {product.title} x {item.amount}
    </div>
  );
};

export default BasketItem;
