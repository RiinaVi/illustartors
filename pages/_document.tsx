import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document<any> {
    render() {
        return (
            <html>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/fiv2nil.css"/>
                <link rel="stylesheet" type="text/css" charSet="UTF-8"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
                <link rel="stylesheet" type="text/css"
                      href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        );
    }
}

export default MyDocument;