import React from 'react'

const ProductImags = ({product}) => {
  return (
    <div className="imgs_item">
          <div className="big_img">
            <img id='big_img' src={product.images[0]} alt="item" />
          </div>
          <div className="sm_img">
          {product.images.map((image, index) => (
            
              <img
                src={image}
                alt="item"
                key={index}
                className={index === 0 ? "active" : ""}
                onClick={()=>{document.getElementById("big_img").src=image}}
              />
            ))}
          </div>
        </div>
  )
}

export default ProductImags
