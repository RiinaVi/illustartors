import React from "react";
import Slider from "react-slick";
import {CustomPrevArrow, CustomNextArrow} from "../StylesSection/StyleSection";

const AuthorsSection = ({authors}) => {
    const settings = {
        arrows: false,
        infinite: false,
        speed: 500,
        slidesToShow: 9,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow/>,
        prevArrow: <CustomPrevArrow/>,
        responsive: [
            {
                breakpoint: 1920,
                settings: {
                    arrows: true,
                }
            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 8,
                    slidesToScroll: 8,
                    arrows: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 6,
                    arrows: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
        ]
    };
    return (
        <section>
            <div className="container">
                <h2>Top Authors</h2>
                <div className="authorsSlider">
                    <Slider {...settings}>
                        {authors && authors.map((item, index) => (
                            <div style={{width: '192px'}} key={index} className="authorsSlide">
                                <img className={'authorsImage'} src={item.avatar}/>
                                <div className="text">{item.name}</div>
                                <div className="artworksNum">{item.artworksNum} artworks</div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default AuthorsSection;