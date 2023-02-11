import React, { useState } from "react";
import product1 from "../assets/images/image-product-1.jpg";
import product2 from "../assets/images/image-product-2.jpg";
import product3 from "../assets/images/image-product-3.jpg";
import product4 from "../assets/images/image-product-4.jpg";
import image1 from "../assets/images/image-product-1-thumbnail.jpg";
import image2 from "../assets/images/image-product-2-thumbnail.jpg";
import image3 from "../assets/images/image-product-3-thumbnail.jpg";
import image4 from "../assets/images/image-product-4-thumbnail.jpg";
import { ReactComponent as Close } from "../assets/images/icon-close.svg";
import "./Product.css";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(product1);
  const [isOpen, setIsOpen] = useState(false);
  const handleProductClick = () => {
    setIsOpen(true);
  };
  const handleCloseClick = () => {
    setIsOpen(false);
  };
  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="product_page">
      <div className="image">
        <div className="larger_img">
          <img
            src={selectedImage}
            alt="product1"
            onClick={handleProductClick}
          />
        </div>
        {isOpen && (
          <div className="modal">
            <div className="modal-content">
              <div className="selectedImage">
                <img src={selectedImage} alt="product1" />
              </div>
              <div class="close">
                <Close onClick={handleCloseClick} className="click" />
              </div>
            </div>
          </div>
        )}

        <div class="images">
          <img
            src={image1}
            alt="img1"
            onClick={() => handleImageClick(product1)}
          />
          <img
            src={image2}
            alt="img2"
            onClick={() => handleImageClick(product2)}
          />
          <img
            src={image3}
            alt="img3"
            onClick={() => handleImageClick(product3)}
          />
          <img
            src={image4}
            alt="img4"
            onClick={() => handleImageClick(product4)}
          />
        </div>
      </div>
      <div class="product_description">
        <div className="company">
          <h5>SNEAKER COMPANY</h5>
        </div>
        <div className="adv_line">
          <h1>
            Fall Limited Edition <br /> Sneakers
          </h1>
        </div>
        <div className="product_para">
          <p>These low-profile sneakers are your perfect casual wear <br/> comapnion.Featuring a durable rubber ou</p>
        </div>
      </div>
    </div>
  );
};

export default Product;
