import storage from 'redux-persist/lib/storage'
import cardReducer from './card/card-reducer'
import {persistReducer} from 'redux-persist'
import {combineReducers, EntityState} from '@reduxjs/toolkit'
import uiReducer, {UiState} from './ui/ui-reducer'
import {CardEntity} from './card/entity/card-entity'
import {PersistPartial} from 'redux-persist/es/persistReducer'

const reducer = combineReducers({
    card: cardReducer,
    ui: uiReducer,
})

export type RootState = {
    card: EntityState<CardEntity>;
    ui: UiState;
} & PersistPartial

export const persistedReducer = persistReducer({
    key: 'root',
    version: 1,
    storage,
}, reducer)
