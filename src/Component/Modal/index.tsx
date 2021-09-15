import React, {memo} from 'react'
import styled from 'styled-components'
import {Theme} from '../../utils/theme'
import {useDispatch} from 'react-redux'
import {closeModal, selectCard} from '../../redux/reducer/ui/ui-reducer'
import DeckCardDetail from '../DeckCardDetail'
import SearchInput from './SearchInput'

interface Card {
    id: string
    name: string
    hp: number
    strength: number
    weakness: number
    happiness: number
    img: string
}

interface ModalProps {
    className: string
    theme: Theme
    cards: Card[]
}

const Modal: React.FC<ModalProps> = (props) => {
    const dispatch = useDispatch()

    return (
        <div className={props.className}>
            <div className="overlay" onClick={() => dispatch(closeModal())}/>
            <div className="modal">
                <SearchInput/>
                <div className="cardlist">
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
                            label="add"
                            callback={() => dispatch(selectCard(card))}
                        />,
                    )}
                </div>
            </div>
        </div>
    )
}

const ModalStyled = styled(Modal)`
  > .overlay {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    background-color: ${(props: ModalProps) => props.theme.colors.component.modalOutside};
  }

  > .modal {
    position: absolute;
    width: 904px !important;
    height: 680px;
    border-radius: 4px;
    top: 0;
    background-color: ${(props: ModalProps) => props.theme.colors.component.modalContentBackground};
    margin-top: 30px;
    margin-left: calc((1024px - 940px) / 2);
    display: grid;
    grid-template-rows: 10% 90%;
    padding: 10px 18px;
    box-shadow: 0 0 2px 2px ${(props: ModalProps) => props.theme.colors.component.modalContentBoxShadow};
    overflow: scroll;

    > .cardlist {
      display: grid;
      grid-row-gap: 20px;

      &:last-child {
        margin-bottom: 100px;
      }
    }
  }
`

export default memo(ModalStyled)
