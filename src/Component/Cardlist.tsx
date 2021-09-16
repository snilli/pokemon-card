import React, {memo} from 'react'
import styled from 'styled-components'
import DeckCardDetail from './DeckCardDetail'
import {unSelectCard} from '../redux/reducer/ui/ui-reducer'
import {useDispatch} from 'react-redux'

export interface Card {
    id: string
    name: string
    hp: number
    strength: number
    weakness: number
    happiness: number
    img: string
}

export interface CardlistProps {
    className: string
    cards: Card[]
}

const Cardlist: React.FC<CardlistProps> = (props) => {
    const dispatch = useDispatch()

    return (
        <div className={props.className}>
            {props.cards.map((card) =>
                <DeckCardDetail
                    className="card"
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    hp={card.hp}
                    strength={card.strength}
                    weakness={card.weakness}
                    happiness={card.happiness}
                    img={card.img}
                    label="x"
                    callback={() => dispatch(unSelectCard(card))}
                />,
            )}
        </div>
    )
}

const CardlistStyled = styled(Cardlist)`
  width: 100%;
  height: calc(768px - 150px);
  display: grid;
  grid-template-columns: repeat(2, 480px);
  justify-content: center;
  grid-auto-rows: max-content;
  overflow: scroll;
  grid-gap: 20px 20px;

  > .card {
    &:last-child {
      margin-bottom: 90px;
    }
  }
`

export default memo(CardlistStyled)
