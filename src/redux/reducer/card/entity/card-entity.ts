import {createEntityAdapter} from '@reduxjs/toolkit'

export interface CardEntity {
    id: string
    name: string
    hp: number
    strength: number
    weakness: number
    happiness: number
    img: string
}

export const cardsAdapter = createEntityAdapter<CardEntity>({
    selectId: (book) => book.id,
    sortComparer: (a, b) => a.name.localeCompare(b.name),
})
