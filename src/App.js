import React, { useState } from "react";
// import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Navbar from "./component/Navbar";
import Fetching from "./Fetching";
import FetchHome from "./FetchHome";
// import GetData from "./Axios";
// import Axios  from 'axios';
// import Head from './header';
// import Form  from './form';
// import "./blog.css";
// import Homepage from './Homepage';
import Form from "./form";
// import Star from './star';
import  GetData  from "./Axios";
import Counter from "./component/counter";
import CounterButton from "./component/CounterButton";
import styled from "styled-components";
import Cart from "./Cart";
import { productTable } from "./stylings";
import Textfield from "./textfield";
import FooterComp from "./component/FooterComp";

function App() {
  const [cart, setCart] = useState([]);
  const [itemCount, setItemCount] = useState(0);

  const handleBuyNow = (product) => {
    setCart([
      ...cart,
      { id: product?.id, name: product?.title, price: product?.price },
    ]);
    setItemCount(itemCount + 1);
    // const existingItems=cart?.find((item)=>{item?.id===product?.id});
    // if(existingItems){
    //   const updateCartItems = Cart?.map((item)=>item?.id===product?.id ? {...item,quantity: item.quantity + 1}:item);
    // setCart(updateCartItems);
    // }
    // else{
    //   const productToAdd= data.find((productItem)=>productItem.id===product.id);
    //   setCart([...cart,{...productToAdd,quantity:1}]);
    // }
  };
  return (
    <Router>
      <Navbar itemCount={itemCount} />
      <Routes>
        <Route path="home" element={<FetchHome />}></Route>
        <Route
          path="products"
          element={<Fetching handleBuyNow={handleBuyNow} />}
        ></Route>
         <Route path="owners" element={<GetData />}></Route>
        <Route
          path="cart"
          element={
            <Cart
              cartItems={cart}
              setCart={setCart}
              setItemCount={setItemCount}
              itemCount={itemCount}
            />
          }
        ></Route>

        <Route path="DummyForm" element={<Form />}></Route>
      </Routes>
      <FooterComp/>
    </Router>
  );
}

export default App;
