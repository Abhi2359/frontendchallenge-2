import React from "react";
import product1 from "../assets/images/image-product-1.jpg"
import image1 from "../assets/images/image-product-1-jpg"
import "./Product.css"

const Product = () => {
  return (
    <div className="product_page">
      <div className="image">
       <div className="larger_img">
<img src={product1} alt="product1" />
       </div>
       <div class="images">
        <img src="" alt=""/>
        <img src="" alt=""/>
        <img src="" alt=""/>
        <img src="" alt=""/>
       </div>
      </div>
      <div class="product_description">
       
      </div>
    </div>
  );
};

export default Product;