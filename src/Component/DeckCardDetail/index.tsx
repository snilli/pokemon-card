import React, {memo, useState} from 'react'
import styled from 'styled-components'
import ProgressBar from './ProgressBar'
import HappinessBar from './HappinessBar'
import ActionButton from './ActionButton'
import {Theme} from '../../utils/theme'

interface DeckCardDetailProps {
    theme: Theme
    className: string
    name: string
    hp: number
    strength: number
    weakness: number
    happiness: number
    img: string
    label: string
    callback: () => void
}

const DeckCardDetail: React.FC<DeckCardDetailProps> = (props) => {
    const [hover, setHover] = useState(false)

    return (
        <div className={props.className} onMouseOver={() => setHover(true)} onMouseLeave={() => setHover(false)}>
            <img src={props.img} alt={props.name}/>
            <div className="detail">
                <div className="pokemon-name">{props.name}</div>
                <ProgressBar label="HP" value={props.hp}/>
                <ProgressBar label="STR" value={props.strength}/>
                <ProgressBar label="WEAK" value={props.weakness}/>
                <HappinessBar value={props.happiness}/>
            </div>
            <div className="action">
                {hover && <ActionButton callback={props.callback} label={props.label}/>}
            </div>
        </div>
    )
}

const DeckCardDetailStyled = styled(DeckCardDetail)`
  height: 260px;
  display: grid;
  grid-template-columns: 195px auto 68px;
  box-shadow: inset 0 0 2px ${(props: DeckCardDetailProps) => props.theme.colors.component.cardBoxShadow};
  background: ${(props: DeckCardDetailProps) => props.theme.colors.component.cardBackground};

  &:hover {
    box-shadow: 1px 1px 2px ${(props: DeckCardDetailProps) => props.theme.colors.component.cardBoxShadowHover};
  }

  > img {
    width: 170px;
    height: 237px;
    margin-top: 10px;
    margin-left: 12px;
  }

  > .detail {
    padding-top: 15px;

    > .pokemon-name {
      font-family: Gaegu, cursive !important;
      font-size: 35px;
      text-transform: uppercase;
    }
  }

  > .action {
    padding-top: 12px;
    color: ${(props: DeckCardDetailProps) => props.theme.colors.component.colorAddButton};
    text-align: right;
    margin-right: 24px;
    font-size: 28px;
  }
`

export default memo(DeckCardDetailStyled)
