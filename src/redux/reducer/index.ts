import storage from 'redux-persist/lib/storage'
import cardReducer from './card/card-reducer'
import {persistReducer} from 'redux-persist'
import {combineReducers} from '@reduxjs/toolkit'
import uiReducer from './ui/ui-reducer'

export const persistedReducer = persistReducer({
    key: 'root',
    version: 1,
    storage,
}, combineReducers({
    card: cardReducer,
    ui: uiReducer,
}))
