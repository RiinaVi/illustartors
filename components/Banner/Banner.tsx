import React from "react";
import BlueButton from "../BlueButton";

const Banner = () => {
    return (
        <div className={'bannerContainer'}>
            <div>
                <h2>Contribute today</h2>
                <p>Earn some serious cash selling your artwork on get.illust</p>
                <BlueButton/>
            </div>
            <img src="/img/footer-img.jpg" alt=""/>
        </div>
    )
}

export default Banner;