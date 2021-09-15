import React, {FC, memo} from 'react'
import styled from 'styled-components'

interface ActionButtonProps {
    className: string
    callback: () => void
    label: string
}

const ActionButton: FC<ActionButtonProps> = (props) => {
    return <span className={props.className} onClick={props.callback}>{props.label}</span>
}

const ActionButtonStyled = styled(ActionButton)`

  text-transform: capitalize;

  &:hover {
    cursor: pointer;
  }
`

export default memo(ActionButtonStyled)
