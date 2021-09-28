import type {AppProps} from 'next/app'
import {Provider} from 'react-redux'
import {useStore} from '../redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import {ThemeProvider} from 'styled-components'
import {theme} from '../utils/theme'
import React from 'react'
import {persistStore} from 'redux-persist'

export default function MyApp({Component, pageProps}: AppProps) {
    const store = useStore(pageProps.initialReduxState)
    const persistor = persistStore(store, {}, function () {
        persistor.persist()
    })

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <ThemeProvider theme={theme}>
                    <Component {...pageProps} />
                </ThemeProvider>
            </PersistGate>
        </Provider>
    )
}
