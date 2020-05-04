import React, {useEffect, useState} from "react";
import {NextPage} from "next";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout/Layout";

import Head from "next/head";
import SearchBox from "../components/SearchBox/SearchBox";
import StyleSection from "../components/StylesSection/StyleSection";
import FeaturedSection from "../components/FeaturedSection/FeaturedSection";
import OnSaleSection from "../components/OnSaleSection/OnSaleSection";
import AuthorsSection from "../components/AuthorSection/AuthorsSection";
import Banner from "../components/Banner/Banner";
import SearchResult from "../components/SearchResult/SearchResult";

type Props = {
    products: any, styles: any, authors: any
}

const HomePage: NextPage<Props> = ({products, styles, authors}) => {

    const [searchValue, setSearchValue] = useState('');
    const [showFilters, setShowFilters] = useState(false);

    useEffect(()=> {
       searchValue ? setShowFilters(true) : setShowFilters(false)
    }, [searchValue])

    return (
        <>
            <Layout>
                <Head>
                    <title>get.illust</title>
                </Head>
                <h1>Hand-picked Digital Illustrations for Web and Mobile</h1>
                <p>Powered by top artists worldwide</p>
                <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} setSearchFilters={setShowFilters}/>
                {showFilters ?
                    <main>
                        <SearchResult styles={styles} products={products} searchValue={searchValue}/>
                    </main>
                    :
                    <>
                        <main>
                            <StyleSection styles={styles}/>
                            <FeaturedSection products={products}/>
                            <OnSaleSection products={products}/>
                            <AuthorsSection authors={authors}/>
                        </main>
                        <Banner/>
                    </>
                }
            </Layout>
        </>
    )
}

HomePage.getInitialProps = async function () {
    const products = await fetch("https://5ea8638535f3720016609006.mockapi.io/products").then((res) => res.json());
    const styles = await fetch("https://5ea8638535f3720016609006.mockapi.io/style").then((res) => res.json());
    const authors = await fetch("https://5ea8638535f3720016609006.mockapi.io/author").then((res) => res.json());
    return {
        products, styles, authors
    }
}
export default HomePage