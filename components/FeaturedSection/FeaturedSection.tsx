import React from "react";
import Item from "../ProductsList/Item";

const FeaturedSection = ({products}) => {

    const featuredProducts = products.filter((item)=> (!item.isOnSale)).slice(0,8);

    return(
        <section className={"featuredSection"}>
            <div className="listHeaders">
                <h2>Featured This Week</h2>
                <div className="seeAll">
                    See All
                </div>
            </div>
            <div className="productsListContainer">
                {featuredProducts.map((item, index)=> (
                    <Item key={index} item={item}/>
                ))}
            </div>
        </section>
    )
};

export default FeaturedSection;