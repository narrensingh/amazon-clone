import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt="amazon-banner"
        />

        <div className="home__row">
          <Product
            id="102938"
            title="The Lean Startup: How Todays Entrepreneurs Use Continuous Innovation to Create Radically"
            price={29.99}
            image="https://m.media-amazon.com/images/I/41Ag4WE7uyL._AC_UY327_FMwebp_QL65_.jpg"
            rating={4}
          />
          <Product
            id="4657890"
            title="Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage, Magic Keyboard) - Silver (Previous Model)"
            price={2198.43}
            image="https://images-na.ssl-images-amazon.com/images/I/71BMVOs2xML._AC_SL1500_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="365748"
            title="Apple AirPods Pro"
            price={300}
            image="https://images-na.ssl-images-amazon.com/images/I/7132OhEdnLL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="4356347"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
            price={800}
            image="https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id="2715890"
            title="Office Professional 2019 1 PC (Lifetime, Download) for Windows 105"
            price={149}
            image="https://images-na.ssl-images-amazon.com/images/I/51OSsxEQAZL._AC_SL1200_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="890832"
            title="ASUS ROG Strix XG43VQ 43? Super Ultra-Wide Curved HDR Gaming Monitor 120Hz (3840 x 1200) 1ms FreeSync 2 HDR DisplayHDR 400 90% DCI-P3,BLACK"
            price={(1, 199)}
            image="https://images-na.ssl-images-amazon.com/images/I/81xhJYiF3LL._AC_SL1500_.jpg"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
