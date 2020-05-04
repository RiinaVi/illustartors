import React from "react";
import Filter from "../Filter/Filter";
import ProductList from "../ProductsList/ProductsList";

const SearchResult = ({styles, products, searchValue}) => {
    return (
        <>
            <div className={'searchResultContainer'}>
                <div className={'resultsHeaders'}>
                    <h2>Artwork Results for “{searchValue}”</h2>
                    <p>{products.length} artworks found</p>
                </div>

                <div className={'filteredProducts'}>
                    <Filter styles={styles}/>
                    <ProductList products={products}/>
                </div>
            </div>

        </>
    )
}

export default SearchResult;