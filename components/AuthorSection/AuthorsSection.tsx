import React from "react";
import Slider from "react-slick";
import {CustomArrow} from "../StylesSection/StyleSection";

const AuthorsSection = ({authors}) => {
    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />
    };
    return (
        <section className={'authorsSectionContainer'}>
            <h2>Top Authors</h2>
            <Slider {...settings}>
                {authors && authors.map((item, index) => (
                    <div style={{ width: '192px' }} key={index} className="authorsSlide">
                        <img className={'authorsImage'} src={item.avatar}/>
                        <div className="text">{item.name}</div>
                        <div className="artworksNum">{item.artworksNum} artworks</div>
                    </div>
                ))}
            </Slider>
        </section>
    )
}

export default AuthorsSection;