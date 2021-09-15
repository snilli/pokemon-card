import React, {memo} from 'react'
import styled from 'styled-components'
import {Theme} from '../utils/theme'
import {useDispatch} from 'react-redux'
import {openModal} from '../redux/reducer/ui/ui-reducer'

interface BottomBarProps {
    theme: Theme;
    className: string
}

const BottomBar: React.FC<BottomBarProps> = ({className}) => {
    const dispatch = useDispatch()

    return (
        <div className={className} onClick={() => dispatch(openModal())}>
            <span className="add-button">+</span>
        </div>
    )
}

const BottomBarStyled = styled(BottomBar)`
  width: 100%;
  height: 75px;
  background-color: ${(props: BottomBarProps) => props.theme.colors.component.bottomBarBackground};
  position: absolute;
  bottom: 0;
  color: ${(props: BottomBarProps) => props.theme.colors.component.bottomBarTextColor};
  display: grid;
  justify-items: center;

  > .add-button {
    position: absolute;
    background-color: inherit;
    text-align: center;
    font-size: 5rem;
    width: 115px;
    height: 115px;
    border-radius: 60%;
    bottom: 0;
    box-shadow: inset 0 7px 7px 6px ${(props: BottomBarProps) => props.theme.colors.component.bottomBarBoxShadow};

    &:hover {
      cursor: pointer;
    }
  }
`

export default memo(BottomBarStyled)
