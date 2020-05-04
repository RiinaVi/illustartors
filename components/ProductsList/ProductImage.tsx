import React from "react";

const ProductImage = ({image}) => (
    <div className={'productImageContainer'}>
        <img src={image} alt=""/>
        <div className="icons">
            <div className="heart"><img src='/img/heart@3x.png'/></div>
            <div className="cart"><img src="/img/add-to-cart-copy@3x.png" alt=""/></div>
        </div>
    </div>
)

export default ProductImage;