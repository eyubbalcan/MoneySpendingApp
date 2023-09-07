import React from "react";

const Product = ({ product, basket, setBasket }) => {


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

  // const removeBasket = () => {
  //   const currentBasket = basket.find(item => item.id === product.id);
  //   const basketWithoutCurrent = basket.filter(item => item.id !== product.id);
  //   currentBasket.amount -= 1;
  //   if (currentBasket === 0) {
  //     setBasket([...basketWithoutCurrent]);

  //   } else {
  //     setBasket([...basketWithoutCurrent, currentBasket]);

  //   }


  // }




  return (
    <>
      <div className="product">
        <h6>{product.title}</h6>
        <h3>$ {product.price}</h3>
        <button >Sat</button>
        <span className="amount">0</span>
        <button onClick={addBasket}>Satın Al</button>

        <style>
          {`
            .product {
              padding: 10px;
              background: #fff;
              border: 1px solid #ddd;
              margin-bottom: 20px;
            }
          `}
        </style>
      </div >
    </>
  );
};

export default Product;
