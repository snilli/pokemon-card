import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {useStore} from '../redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import {ThemeProvider} from 'styled-components'
import {theme} from '../utils/theme'
import React from 'react'
import {persistStore} from 'redux-persist'
import Head from 'next/head'

export default function MyApp({Component, pageProps}: AppProps): JSX.Element {
    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store)
    persistor.persist()

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Head>
                        <meta charSet="utf-8"/>
                        <meta name="viewport" content="width=device-width, initial-scale=1"/>
                        <meta name="theme-color" content="#000000"/>
                        <meta
                            name="description"
                            content="Web site created using create-react-app"
                        />
                        <meta name="viewport" content="viewport-fit=cover"/>
                    </Head>
                    <Component {...pageProps} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
