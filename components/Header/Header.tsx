import React from "react";
import SubmitButton from "../SubmitButton";
// @ts-ignore
import Heart from '../../public/img/heart.svg'

const Header = () => (
    <header>
        <div className="container">
            <div className="getillust">get.illust</div>
            <div className="icons">
                <div className="heart"><Heart/></div>
                <div className="cart">
                    <div className="badge"/>
                    <img className={'cart'} src="/img/add-to-cart-copy@3x.png" alt="cart"/>
                </div>
                <div className="avatar"/>
                <SubmitButton/>
            </div>
        </div>
    </header>
)

export default Header