import React from "react";
import Item from "../ProductsList/Item";

const FeaturedSection = ({products}) => {

    const featuredProducts = products.filter((item)=> (!item.isOnSale)).slice(0,8);

    return(
        <section>
            <div className="container">
                <div className="listHeaders">
                    <h2>Featured This Week</h2>
                    <div className="seeAll">
                        See All
                    </div>
                </div>
                <div className="featuredProducts productsList">
                    {featuredProducts.map((item, index)=> (
                        <Item key={index} item={item}/>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default FeaturedSection;