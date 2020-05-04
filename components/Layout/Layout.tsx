import {NextPage} from "next";
import React from "react";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";

type Props = {};

const Layout:NextPage<Props> = ({children}) => (
    <div>
        <Header/>
        {children}
        <Footer/>
    </div>
)

export default Layout;