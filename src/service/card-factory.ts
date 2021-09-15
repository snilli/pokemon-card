import {Card, CardAttack, CardWeakness} from '../../mock/card.interface'
import {CardEntity} from '../redux/reducer/card/card-entity'

export class CardEntityFactory {
    static fromCardlist(card: Card): CardEntity {
        const hp = this.getHp(card.hp)
        const strength = this.getStrength(card.attacks)
        const damage = this.getDamage(card.attacks)
        const weakness = this.getWeakness(card.weaknesses)
        const happiness = this.getHappiness(hp, damage, weakness)

        return {
            id: card.id.toString(),
            img: card.imageUrl,
            name: card.name,
            hp: hp,
            strength: strength,
            happiness: happiness,
            weakness: weakness,
        }
    }

    private static getStrength(attacks?: CardAttack[]): number {
        if (!attacks) {
            return 0
        }

        if (attacks.length > 1) {
            return 100
        }

        return 50
    }

    private static getHp(rawHp: string): number {
        const hp = parseInt(rawHp)
        if (!hp) {
            return 0
        }

        if (hp >= 100) {
            return 100
        }

        return hp
    }

    private static getHappiness(hp: number, damage: number, weakness: number): number {
        return Math.round(((hp / 10) + (damage / 10) + 10 - (weakness / 100)) / 5)
    }

    private static getDamage(attacks?: CardAttack[]): number {
        if (!attacks) {
            return 0
        }

        return attacks.reduce((accumulator, atk) => {
            let damage = parseInt(atk.damage)
            if (isNaN(damage)) {
                damage = 0
            }

            return accumulator + damage
        }, 0)
    }

    private static getWeakness(weaknesses?: CardWeakness[]): number {
        if (!weaknesses) {
            return 0
        }

        if (weaknesses.length > 1) {
            return 0
        }

        return 100
    }
}
