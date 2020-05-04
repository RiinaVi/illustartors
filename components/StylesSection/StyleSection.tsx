import React from "react";
import Slider from "./Slider";

const StyleSection = ({styles}:any) => (
    <section>
        <h2>Explore styles</h2>
        <Slider items={styles}/>
    </section>
)

export default StyleSection;