import {createSlice, PayloadAction} from '@reduxjs/toolkit'

export interface UiState {
    isOpenModal: boolean
}

const uiState: UiState = {
    isOpenModal: false,
}

export const uiSlice = createSlice({
    name: 'ui',
    initialState: uiState,
    reducers: {
        addCardToDeck: ((state, action: PayloadAction<Card>) => {

        }),
        removeCardFromDeck: ((state, action: PayloadAction<Card>) => {

        }),
    },
})

export default uiSlice.reducer
