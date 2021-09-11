import storage from 'redux-persist/lib/storage'
import cardListReducer from './card-list-reducer'
import uiReducer from './ui-reducer'
import {createTransform, persistReducer} from 'redux-persist'
import {RootState} from '../store'
import {combineReducers} from '@reduxjs/toolkit'
import {Card} from '../../mock/card.interface'

export interface RootReducerPersist {
    card: {
        deckCard: Card[]
        searchCard: Card[]
    }
    ui: {
        isModalOpen: boolean
    }
}

const transformSubeventMap = createTransform(
    (state: RootState): RootReducerPersist => {

        return {
            card: {deckCard: state.card, searchCard: []},
            ui: {isModalOpen: false},
        }
    },
    state => new Map(JSON.parse(state)),
    {whitelist: ['stepFour']},
)

export const persistedReducer = persistReducer({
    key: 'root',
    version: 1,
    storage,
    transforms: [],
}, combineReducers({
    card: cardListReducer,
    ui: uiReducer,
}))
