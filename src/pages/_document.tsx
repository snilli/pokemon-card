import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from 'react'

class MyDocument extends Document {
    render(): JSX.Element {
        return (
            <Html>
                <Head>
                    <link rel="apple-touch-icon" href="/logo192.png"/>
                    <link href="https://fonts.googleapis.com/css?family=Atma:700|Gaegu|Love+Ya+Like+A+Sister"
                          rel="stylesheet"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        )
    }
}

export default MyDocument
