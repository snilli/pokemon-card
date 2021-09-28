import React, {memo} from 'react'
import styled from 'styled-components'

export interface HappinessBarProps {
    className: string
    value: number
}

const HappinessBar: React.FC<HappinessBarProps> = (props) => {

    return (
        <div className={props.className}>
            {[...new Array(props.value)].map((_, index) => (
                <div className="happiness-bar" key={index}/>
            ))}
        </div>
    )
}

const HappinessBarStyled = styled(HappinessBar)`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;

  > .happiness-bar {
    margin-top: 10px;
    width: 43px;
    height: 43px;
    background-size: 43px 43px;
    background-image: url("/images/cute.png");
  }
`

export default memo(HappinessBarStyled)
