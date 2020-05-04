import React from "react";
import ProductImage from "./ProductImage";

const ProductList = ({products}) => {
    return (
        <div className={"productsListContainer"}>
            {products && products.map((item, index) => (
                <div className={'item'} key={index}>
                    <ProductImage image={item.image}/>
                    {/*<img src={item.image} alt="item"/>*/}
                    <div className="authorInfo">
                        <div className={"authorImg"}/>
                        <div className={"authorName"}>
                            {item.author}
                        </div>
                    </div>
                    {item.isOnSale ?
                        <div className={"priceChange"}>
                            <div className="itemPrice newPrice">
                                {item.newPrice}
                            </div>
                            <div className="itemPrice oldPrice">
                                <span>
                                    {item.price}
                                </span>
                            </div>
                        </div>
                        :
                        <div className={"itemPrice"}>{item.price}</div>
                    }
                </div>
            ))}
        </div>
    )
}

export default ProductList;