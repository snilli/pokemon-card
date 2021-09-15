import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {Provider} from 'react-redux'
import {persistor, store} from './redux/store'
import {PersistGate} from 'redux-persist/integration/react'
import {ThemeProvider} from 'styled-components'
import {theme} from './utils/theme'

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </PersistGate>
    </Provider>,
    document.getElementById('root'),
)
