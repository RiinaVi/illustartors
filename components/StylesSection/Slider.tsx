import React, {useEffect, useRef, useState} from "react";


const Slider = ({items}:any) => {

    const slidesLength =
        // items.length ||
        8;
    const maxNumOfSlidesWithoutArrows = 5;
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(()=> {
        console.log(slideIndex);
    },[slideIndex])

    function plusSlides() {
        if (slideIndex < slidesLength) {
            setSlideIndex(slideIndex+1)
        }
    }

    function minusSlides() {
        if (slideIndex > 1) {
            setSlideIndex(slideIndex-1)
        }
    }

    var slides = useRef();



    return (

        <div className={'slideshow-container'}>
            <div className="fullSizeSlides">

                {items && items.map((item, index) => (
                    <div key={index} ref={slides} className="slide fade">
                        {/*<div className="numbertext">{index+1}/{items.length}</div>*/}
                        <img src={item.image}/>
                        <div className="text">{item.name}</div>
                    </div>
                ))}
            </div>
            <a className="prev" onClick={()=>minusSlides()}>&#10094;</a>
            <a className="next" onClick={()=>plusSlides()}>&#10095;</a>
        </div>
    )
}

export default Slider;