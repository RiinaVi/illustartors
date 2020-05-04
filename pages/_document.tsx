import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class MyDocument extends Document<any> {
    render() {
        return (
            <html>
            <Head>
                <link rel="stylesheet" href="https://use.typekit.net/fiv2nil.css"/>
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