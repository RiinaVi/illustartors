import React from "react";
import Item from "../ProductsList/Item";

const OnSaleSection = ({products}) => {

    const productsOnSale = products.filter(item => item.isOnSale).slice(0,7);

    return(
        <section className={"onSaleSection"}>
            <div className="listHeaders">
            <h2>On Sale</h2>
                <div className="seeAll">
                    See All
                </div>
            </div>
            <div className="productsListContainer">
                {productsOnSale.map((item, index)=> (
                    <Item key={index} item={item}/>
                ))}
            </div>
        </section>
    )
}

export default OnSaleSection;