import React from "react";
import product1 from "../assets/images/image-product-1-thumbnail.jpg"


const Product = () => {
  return (
    <div className="product_page">
      <div className="image">
       <div className="larger_img">
<img src={product1} alt="product1" />
       </div>
      </div>
      <div class="product_description">
       
      </div>
    </div>
  );
};

export default Product;
