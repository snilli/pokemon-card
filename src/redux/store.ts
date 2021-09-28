import {configureStore} from '@reduxjs/toolkit'
import {persistedReducer, ReducerState} from './reducer'
import {persistStore} from 'redux-persist'
import {useMemo} from 'react'

export function makeStore(preloadedState: ReducerState): typeof configureStore {
    return configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware({
                serializableCheck: false,
            })
        },
        preloadedState: preloadedState,
    })
}

export const initializeStore = (preloadedState: ReducerState) => {
    let _store = store ?? makeStore(preloadedState)

    // After navigating to a page with an initial Redux state, merge that state
    // with the current state in the store, and create a new store
    if (preloadedState && store) {
        _store = makeStore({
            ...store.getState(),
            ...preloadedState,
        })
        // Reset the current store
        store = undefined
    }

    // For SSG and SSR always create a new store
    if (typeof window === 'undefined') return _store
    // Create the store once in the client
    if (!store) store = _store

    return _store
}

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
            serializableCheck: false,
        })
    },
})

export const persistor = persistStore(store)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useStore = (initialState: ReducerState) => {
    return useMemo(() => initializeStore(initialState), [initialState])
}
