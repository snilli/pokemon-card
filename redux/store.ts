import {configureStore} from '@reduxjs/toolkit'
import {persistedReducer} from './reducer/reducer'

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({})
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
