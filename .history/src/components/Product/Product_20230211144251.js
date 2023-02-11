import React from "react";
import product1 from "../assets/images/image-product-1.jpg"
import image1 from "../assets/images/image-product-1-thumbnail.jpg"
import image2 from "../assets/images/image-product-2-thumbnail.jpg"
import image3 from "../assets/images/image-product-3-thumbnail.jpg"
import image4 from "../assets/images/image-product-4-thumbnail.jpg"
import "./Product.css"

const Product = () => {
  return (
    <div className="product_page">
      <div className="image">
       <div className="larger_img">
<img src={product1} alt="product1" />
       </div>
       <div class="images">
        <img src={image1} alt="img1"/>
        <img src={image2} alt="img2"/>
        <img src={image3} alt="img3"/>
        <img src={image4} alt="img4"/>
       </div>
      </div>
      <div class="product_description">
       
      </div>
    </div>
  );
};

export default Product;