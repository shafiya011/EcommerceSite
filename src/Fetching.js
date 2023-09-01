import React, { useState, useEffect } from "react";
import { Data, Main, Image, Button, Title, H1 } from "./stylings";
import axios from "axios";
import { Link } from "react-router-dom";


const Fetching = ({ handleBuyNow }) => {
  const [data, setData] = useState([]);
  const url = "https://fakestoreapi.com/products";
  const fetching = () => {
    axios
      .get(url)
      .then((res) => {
        console?.log(res);
        setData(res.data);
      })
      .catch((err) => {
        console?.log(err);
      });
  };

  useEffect(() => {
    fetching();
  }, []);

  return (
    <div id="MainPageId">
      <H1>Check Out New Products!!</H1>
      <Main>
        {data.map((dataObj, index) => {
          return (
            <Data key={index}>
              <div>{dataObj?.id}</div>
              <Title title={dataObj?.title}>{dataObj?.title}</Title>
              <Image src={dataObj?.image} alt="product_image"></Image>
              <p style={{ fontWeight: "200" }}>
                Ratings: {dataObj?.rating?.rate}
              </p><br/>
              <p>
                <span className="a-price-symbol">$ </span>
                {dataObj?.price}
              </p>
              <br/>
              <Button
                onClick={() => {
                  handleBuyNow(dataObj);
                }}
              >
                Add To Cart
              </Button>
            </Data>
          );
        })}
      </Main>
    </div>
  );
};
export default Fetching;
