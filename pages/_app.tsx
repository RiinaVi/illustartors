import './style/style.scss';
import React from "react";

const App = ({Component, pageProps}) => {
    return <Component {...pageProps}/>
}

export default App;