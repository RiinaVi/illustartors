import React from "react";
import SubmitButton from "../SubmitButton";

const Banner = () => {
    return (

        <section className={'banner'}>
            <div className="container">
                <div className={"bannerText"}>
                    <h2>Contribute today</h2>
                    <p>Earn some serious cash selling your artwork on get.illust</p>
                    <SubmitButton/>
                </div>
            </div>
        </section>

    )
}

export default Banner;