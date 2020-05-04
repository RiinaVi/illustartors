import React from "react";
import ProductImage from "./ProductImage";

const Item = ({item}) => {
    return (
        <div className={'item'}>
            <ProductImage image={item.image}/>
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
    )
}

export default Item;