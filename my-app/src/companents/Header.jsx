import { useState } from "react";
import { moneyFormat } from "../helpers";

const Header = ({ money, total }) => {
  return (
    <>
      {total > 0 && money - total !== 0 && (
        <div className="header">Harcanacak <span>${moneyFormat(money - total)}</span> paranız kaldı. </div>
      )}
      {total === 0 && (
        <div className="header">Harcanacak <span>${moneyFormat(money - total)}</span> paranız kaldı. </div>
      )}
      {money - total === 0 && <div className="header">Paranız bitti. </div>}
      <style>{`
      .header{
        position: sticky;
        top:0;
        background: linear-gradient(to bottom, #20b820, #14be2a);
        height: 60px;
        display:flex;
        align-items: center;
        justify-content: center;
        color: #fff;
        font-size: 25px;
        letter-spacing: 1px
      }
      
      .header span{
        margin: 0 10px;
      }
      
      `
      }</style>
    </>
  );
};

export default Header;
