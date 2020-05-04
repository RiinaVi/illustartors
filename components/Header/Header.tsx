import React from "react";
import BlueButton from "../BlueButton";
// @ts-ignore
import Heart from '../../public/img/heart.svg'

const Header = () => (
    <header>
        <div className="getillust">get.illust</div>
            <div className="icons">
                    <div className="heart"><Heart/></div>
                    <div className="cart"><div className="badge"/>
                        <img className={'cart'} src="/img/add-to-cart-copy@3x.png" alt="cart"/>
                    </div>
                    <div className="avatar"/>
                    <BlueButton/>
            </div>
    </header>
)

export default Header