import React, {memo} from 'react'
import styled from 'styled-components'

export interface HeaderProps {
    className: string
}

const Header: React.FC<HeaderProps> = ({className}) => {
    return (
        <div className={className}>
            <h1 className="title">My Pokedex</h1>
        </div>
    )
}

const HeaderStyled = styled(Header)`
  > .title {
    font-size: 3rem;
    text-align: center;
    margin: 10px 0;
  }
`

export default memo(HeaderStyled)
