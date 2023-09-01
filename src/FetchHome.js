import React from "react";
import { HomeData, HomeImage, Button } from "./stylings";

const FetchHome = () => {
  return (
    <div className="homeDiv">
      <h1 style={{ margin: "auto", textAlign: "center", padding: "20px" }}>
        Shop Now!!
      </h1>

      <div className="homePage">
        <HomeData>
          <h3>Electronics</h3>
          <HomeImage
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGT0XHULuRTtvA29C8Tr3P7pBL1JgaqAfxOLMMjN4cQAfBTvqNgPTmrqfgjreGENFt8U8&usqp=CAU"
            alt="Electronics"
            
          ></HomeImage>
          <Button>Shop Now</Button>
        </HomeData>
        <HomeData>
          <h3>Accesories</h3>
          <HomeImage
            src="https://www.kovet.in/wp-content/uploads/2019/08/Why-Fashion-Accessories-are-so-Important.png"
            alt="Accesories"
            
          ></HomeImage>
          <Button>Shop Now</Button>
        </HomeData>
        <HomeData>
          <h3>Dresses</h3>
          <HomeImage
            src="https://www.andindia.com/on/demandware.static/-/Sites-AND-Library/default/dw3f529c68/images/EOSS-Banner-2023/EOSS-29-June-2023/CatAND%20BANNERS-10.jpg"
            alt="Dresses"
            
          ></HomeImage>
          <Button>Shop Now</Button>
        </HomeData>
      </div>
    </div>
  );
};

export default FetchHome;
