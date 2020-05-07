import React from "react";
import Link from "next/link";
import SubmitButton from "../SubmitButton";

const Footer = () => (
    <footer>
        <div className="container">
            <div className="getillust">GET.ILLUST</div>
            <div className="links">
                <Link href={'/'}>
                    <a>FAQ</a>
                </Link>
                <Link href={'/'}>
                    <a>Contact</a>
                </Link>
                <Link href={'/'}>
                    <a>Legal</a>
                </Link>
                <Link href={'/'}>
                    <a>For Artists</a>
                </Link>
                <SubmitButton/>
            </div>
        </div>
    </footer>
)

export default Footer;