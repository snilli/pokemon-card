import {AnyAction, configureStore, Store} from '@reduxjs/toolkit'
import {persistedReducer, RootState} from './reducer'
import {useMemo} from 'react'

export function makeStore(preloadedState: RootState) {
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

let store: Store<RootState, AnyAction> | undefined

export const initializeStore = (preloadedState: RootState) => {
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

export const useStore = (initialState: RootState) => {
    return useMemo(() => initializeStore(initialState), [initialState])
}
