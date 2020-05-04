import React from "react";

const Filter = ({styles}) => {
    return (
        <div className={'filterContainer'}>
            <h6>Styles</h6>
            <div className="stylesList">
                {styles.map((style, index) => (
                    <div key={index} className={'stylesListItem'}>
                        <label className="container">
                            <span>{style.name}</span>
                            <input type="checkbox"/>
                            <span className="checkmark"/>
                        </label>
                        <div className="styleImage">
                            <img src={style.image} alt=""/>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Filter;

