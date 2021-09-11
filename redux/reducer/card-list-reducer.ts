import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import {CardListState} from './interface/card-list-slice.interface'
import {Card} from '../../mock/card.interface'

export interface CardListState {
    deckCard: Map<string, Card>
    searchCard: Map<string, Card>
}

const cardlistState: CardListState = {
    deckCard: new Map(),
    searchCard: new Map(),
}
const a = createAsyncThunk('a', async (): Promise<number> => {
    return 1
})
export const cardListReducer = createSlice({
    name: 'cardlist',
    initialState: cardlistState,
    reducers: {
        addCardToDeck: ((state, action: PayloadAction<Card>) => {

        }),
        removeCardFromDeck: ((state, action: PayloadAction<Card>) => {

        }),
    },
    extraReducers: (builder) => {
        builder.addCase(a.fulfilled, (s, a) => {
            a.payload
        })
    },
})

export default cardListReducer.reducer
