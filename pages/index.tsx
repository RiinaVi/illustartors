import React, {useState} from "react";
import {NextPage} from "next";
import fetch from "isomorphic-unfetch";

type Props = {
    products: any, styles: any
}
//
// const Index: NextPage<Props> = ({products}) => (
//     <div>
//         {products.map((product, index) => (
//             <li key={index}>
//                 <span>{product.id}</span>
//                 <span>{product.author}</span>
//                 <span>{product.style}</span>
//                 {product.price}
//                 <img src={product.image} alt=""/>
//             </li>
//         ))}
//     </div>
// )
//
// Index.getInitialProps = async function() {
//     const res = await fetch("https://5ea8638535f3720016609006.mockapi.io/style/1/product");
//     const data = await res.json();
//     return {
//         products: data
//     }
// }
//
// export default Index;

import Layout from "../components/Layout/Layout";
import Head from "next/head";
import SearchBox from "../components/SearchBox/SearchBox";
import StyleSection from "../components/StylesSection/StyleSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import OnSaleSection from "../components/OnSaleSection/OnSaleSection";
import AuthorsSection from "../components/AuthorSection/AuthorsSection";
import Banner from "../components/Banner/Banner";
import SearchResult from "../components/SearchResult/SearchResult";

const HomePage: NextPage<Props> = ({products, styles}) => {

    const [searchValue, setSearchValue] = useState('');
    return (
        <>
            <Layout>
                <Head>
                    <title>get.illust</title>
                </Head>
                <h1>Hand-picked Digital Illustrations for Web and Mobile</h1>
                <p>Powered by top artists worldwide</p>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue}/>
                <main>
                    <SearchResult styles={styles} products={products} searchValue={searchValue}/>
                    {/*<StyleSection styles={styles}/>*/}
                    {/*<FeaturedSection/>*/}
                    {/*<OnSaleSection/>*/}
                    {/*<AuthorsSection/>*/}
                </main>
                {/*<Banner/>*/}
            </Layout>
        </>
    )
}

HomePage.getInitialProps = async function () {
    const products = await fetch("https://5ea8638535f3720016609006.mockapi.io/products").then((res) => res.json());
    const styles = await fetch("https://5ea8638535f3720016609006.mockapi.io/style").then((res) => res.json());
    return {
        products, styles
    }
}
export default HomePage