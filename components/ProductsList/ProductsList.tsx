import React from "react";
import Item from "./Item";

const ProductList = ({products}) => {
    return (
        <div className={"productsList"}>
            {products && products.map((item, index) => (
              <Item key={index} item={item}/>
            ))}
        </div>
    )
}

export default ProductList;