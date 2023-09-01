// import React from 'react'
import styled from "styled-components";
import { ProductTable, TotalPrice } from "./stylings";

import React, { useState } from "react";

const Cart = ({ cartItems, setCart, setItemCount, itemCount }) => {
  console.log(cartItems);

  const [totalPrice, setTotalPrice] = useState(0);

  const handleDelete = (itemId) => {
    const updatedCartItems = cartItems?.filter((item) => item?.id !== itemId);
    // console.log(updatedCartItems);
    setCart(updatedCartItems);
    setItemCount(itemCount - 1);
  };

  const handleTotal=()=>{
    const newTotalPrice = cartItems?.reduce(
      (total, item) => total + item?.price,
      0
    );
    setTotalPrice(newTotalPrice);
  }

  

  return (
    <div>
      {/* {if(itemCount===0){
        return (<h2>Your Cart is Empty</h2>)
      } */}
       
      <ProductTable>
        <thead>
          <th>Product.no</th>
          <th>Product Name</th>
          <th>qnty</th>
          <th>Price</th>
          <th>Delete</th>
        </thead>
        {cartItems?.map((item, index) => {
          return (
            <tbody key={index}>
              <tr>
                <td> {item?.id}</td>
                <td> {item?.name} </td>
                <td>{}</td>
                <td> {item?.price}</td>
                {/* <button onClick={(e)=>e.target.closest('tr').remove()}>Delete</button>  */}
                <button onClick={() => handleDelete(item?.id)}>Delete</button>
              </tr>
            </tbody>
          );
        })}
      </ProductTable>
      <button onClick={handleTotal}>Total Price:</button>
      <TotalPrice class="a-price-symbol">
         $ {totalPrice}
      </TotalPrice>
{/* } */}
    </div>
    );
      }

export default Cart;
