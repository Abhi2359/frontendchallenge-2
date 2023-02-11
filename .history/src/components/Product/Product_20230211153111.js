import React ,{useState} from "react";
import product1 from "../assets/images/image-product-1.jpg"
import product2 from "../assets/images/image-product-2.jpg"
import product3 from "../assets/images/image-product-3.jpg"
import product4 from "../assets/images/image-product-4.jpg"
import image1 from "../assets/images/image-product-1-thumbnail.jpg"
import image2 from "../assets/images/image-product-2-thumbnail.jpg"
import image3 from "../assets/images/image-product-3-thumbnail.jpg"
import image4 from "../assets/images/image-product-4-thumbnail.jpg"
import "./Product.css"

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(product1);
 


  const handleImageClick = (image) => {
    setSelectedImage(image);
   
  };
 
  return (
    <div className="product_page">
      <div className="image">
       

       <div className="larger_img">
<img src={selectedImage} alt="product1" />
       </div>
       <div class="images">
        <img 
        src={image1}
         alt="img1"
         style={{ opacity: imageOpacity }}
         onClick={() => handleImage1Click(product1)}
         />
        <img 
        src={image2} 
        alt="img2"
        style={{ opacity: image2Opacity }}
        onClick={() => handleImage2Click(product2)}
        />
        <img 
        src={image3}
         alt="img3"
         style={{ opacity: image3Opacity }}
                 onClick={() => handleImage3Click(product3)}
         />
        <img 
        src={image4} 
        alt="img4"
        style={{ opacity: image4Opacity }}
        onClick={() => handleImage4Click(product4)}
        />
       </div>
       

      </div>
      <div class="product_description">
       
      </div>
    </div>
  );
};

export default Product;
