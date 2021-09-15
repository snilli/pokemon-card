import React, {memo} from 'react'
import styled from 'styled-components'
import {Theme} from '../../utils/theme'

interface ProgressBarProps {
    className: string
    label: string
    value: string
    theme: Theme
}

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    return (
        <div className={props.className}>
            <div className="label">
                {props.label}
            </div>
            <div className="progress-bar">
                <div className="progress-value"/>
            </div>
        </div>
    )
}

const ProgressBarStyled = styled(ProgressBar)`
  display: grid;
  grid-template-columns: 70px auto;
  font-size: 21px;

  > .label {
    text-transform: uppercase;
  }

  > .progress-bar {
    height: 26px;
    min-width: 152px;
    max-width: 65%;
    border-radius: 18px;
    overflow: hidden;
    background-color: ${(props: ProgressBarProps) => props.theme.colors.component.levelTubeBackground};
    box-shadow: 0 0 2px ${(props: ProgressBarProps) => props.theme.colors.component.levelTubeBoxShadow};

    > .progress-value {
      height: 100%;
      width: ${(props: ProgressBarProps) => props.value}%;
      background-color: ${(props: ProgressBarProps) => props.theme.colors.component.levelTubeValueBackground};
    }
  }
`

export default memo(ProgressBarStyled)
