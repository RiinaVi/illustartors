import React, {useRef} from "react";
import Slider from "react-slick";


export function CustomPrevArrow(props) {
    const {className, style, onClick} = props;
    return (
        // <div className={'arrowFade arrowFade--prev'}>
        <div className={className} onClick={onClick}/>
        // </div>
    );
}

export function CustomNextArrow(props) {
    const {className, style, onClick} = props;
    return (
        // <div
        //     className={className}
        //     onClick={onClick}
        // />
        <div className={'arrowFade arrowFade--next'}>
            <div className={className} onClick={onClick}/>
        </div>
    );
}


const StyleSection = ({styles}: any) => {


    const settings = {
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 5,
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
                breakpoint: 1000,
                settings: {
                    arrows: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section className={"styleSection"}>
            <div className="container">
                <h2>Explore styles</h2>
                <Slider {...settings}>
                    {styles && styles.map((item, index) => (
                        <div key={index} className="slide">
                            <div className="slide__content">
                                <img src={item.image}/>
                                <div className="text">{item.name}</div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    )
}

export default StyleSection;