export interface Cardlist {
    cards: Card[]
}

export interface CardAbility {
    name: string
    text: string
    type: string
}

export interface CardWeakness {
    type: string
    value: string
}

export interface CardAttack {
    cost: string[]
    name: string
    text: string
    damage: string
    convertedEnergyCost: number
}

export interface Card {
    id: string
    name: string
    nationalPokedexNumber: number
    imageUrl: string
    imageUrlHiRes: string
    supertype: string
    subtype: string
    ability: CardAbility
    hp: string
    retreatCost: string[]
    convertedRetreatCost: number
    number: string
    artist: string
    rarity: string
    series: string
    set: string
    setCode: string
    text: string[]
    attacks: CardAttack[]
    weaknesses: CardWeakness[]
    type: string
}
