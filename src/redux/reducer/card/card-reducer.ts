import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import {Cardlist} from '../../../../mock/card.interface'
import {CardEntity, cardsAdapter} from './card-entity'
import {CardEntityFactory} from '../../../service/card-factory'
import {apiUrl} from '../../../utils/constant'

export const fetchCard = createAsyncThunk('card/fetchCard', async (text?: string): Promise<CardEntity[]> => {
    let url = `${apiUrl}/cards?limit=20`
    if (text) {
        url += `&name=${text}&type=${text}`
    }

    const response = await fetch(url)
    const res = await response.json() as Cardlist
    return res.cards.map((card) => CardEntityFactory.fromCardlist(card))
})

export const cardReducer = createSlice({
    name: 'card',
    initialState: cardsAdapter.getInitialState(),
    reducers: {
        removeCard: cardsAdapter.removeAll,
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCard.fulfilled, (state, action) => {
            cardsAdapter.addMany(state, action.payload)
        })
    },
})

export const {removeCard} = cardReducer.actions

export default cardReducer.reducer
