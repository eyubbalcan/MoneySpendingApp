/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Product = ({ product, basket, setBasket, total, money }) => {

  const basketItem = basket.find(item => item.id === product.id)

  // if (bastItem.amount < 0) {
  //   bastItem.amount = 0;
  // }
  const addBasket = () => {

    const checkBasket = basket.find(item => item.id === product.id)

    if (checkBasket) {
      checkBasket.amount += 1
      setBasket([...basket.filter(item => item.id !== product.id), checkBasket]);
    } else {
      setBasket([...basket,
      {
        id: product.id,
        amount: 1
      }])
    }
  }

  const removeBasket = () => {
    const currentBasket = basket.find(item => item.id === product.id);
    const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
    currentBasket.amount -= 1;
    if (currentBasket.amount === 0) {
      setBasket([...basketWithoutCurrent]);

    } else {
      setBasket([...basketWithoutCurrent, currentBasket]);

    }


  }





  return (
    <>
      <div className="product">
        <img src={product.image} />
        <h6>{product.title}</h6>
        <h3>$ {product.price}</h3>
        <button disabled={!basketItem} onClick={removeBasket}>Sat</button>
        <span className="amount">{basketItem && basketItem.amount || 0}</span>
        <button disabled={total + product.price > money} onClick={addBasket}>Satın Al</button>

        <style jsx>
          {`
             .product {
              padding: 15px;
              background: #fff;
              border: 1px solid #ddd;
              margin-bottom: 20px;
              width: 24%;
            }

            .product img {
              width: 100%;
            }

            .product h6{
              font-size:20;
              margin-bottom: 10px;
            }
          `}
        </style>

      </div >
    </>
  );
};

export default Product;
