import {createSlice, current, PayloadAction} from '@reduxjs/toolkit'
import {CardEntity} from '../card/entity/card-entity'
import {fetchCard} from '../card/card-reducer'

export interface UiState {
    isOpenModal: boolean
    selectedCard: CardEntity[]
    searshCard: CardEntity[]
}

const initialState: UiState = {
    isOpenModal: false,
    searshCard: [],
    selectedCard: [],
}

export const uiReducer = createSlice({
    name: 'ui',
    initialState: initialState,
    reducers: {
        openModal(state) {
            state.isOpenModal = true
        },
        closeModal(state) {
            state.isOpenModal = false
        },
        selectCard(state, action: PayloadAction<CardEntity>) {
            state.searshCard = current(state.searshCard).filter((card) => card.id !== action.payload.id)
            state.selectedCard.push(action.payload)
        },
        unSelectCard(state, action: PayloadAction<CardEntity>) {
            state.selectedCard = current(state.selectedCard).filter((card) => card.id !== action.payload.id)
            state.searshCard.push(action.payload)
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCard.fulfilled, (state, action) => {
            const currentState = current(state)
            const selectedCardIds = currentState.selectedCard.map(card => card.id)
            state.searshCard = action.payload.filter(card => !selectedCardIds.includes(card.id))
        })
    },
})

export const {openModal, closeModal, unSelectCard, selectCard} = uiReducer.actions

export default uiReducer.reducer
