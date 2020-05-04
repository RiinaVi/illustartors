import React from "react";
import Slider from "react-slick";


export function CustomArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            onClick={onClick}
        />
    );
}


const StyleSection = ({styles}:any) => {

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        // centerPadding: "60px",
        // centerMode: true,
        nextArrow: <CustomArrow />,
        prevArrow: <CustomArrow />
    };
    return (

    <section className={"slideshow-container"}>
        <h2>Explore styles</h2>
        <Slider {...settings}>
            {styles && styles.map((item, index) => (
                <div style={{ width: '192px' }} key={index} className="slide">
                    <img src={item.image}/>
                    <div className="text">{item.name}</div>
                </div>
            ))}
        </Slider>
    </section>
)}

export default StyleSection;