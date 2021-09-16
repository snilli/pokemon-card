import React, {memo, useState} from 'react'
import styled from 'styled-components'
import {useDebounceCallback} from '@react-hook/debounce'
import {useDispatch} from 'react-redux'
import {fetchCard} from '../../redux/reducer/card/card-reducer'
import {Theme} from '../../utils/theme'

export interface SearchInputProps {
    className: string
    label: string
    theme: Theme
}

const SearchInput: React.FC<SearchInputProps> = (props) => {
    const [searchString, setSearchString] = useState('')
    const dispatch = useDispatch()

    const fetchCallback = useDebounceCallback(() => {
        dispatch(fetchCard(searchString))
    }, 500)

    return (
        <div className={props.className}>
            <input type="text" value={searchString} onChange={e => {
                setSearchString(e.target.value)
                fetchCallback()
            }}/>
            <img width="45px" src={process.env.PUBLIC_URL + '/images/search.png'} className="search-image"
                 alt="search-img"/>
        </div>
    )
}

const SearchInputStyled = styled(SearchInput)`
  height: 100%;

  > input[type=text] {
    width: 99%;
    height: 60%;
    font-size: 2rem;
    font-family: Gaegu, cursive !important;
    border: 1px solid ${(props: SearchInputProps) => props.theme.colors.component.searchBoxBorder};
  }

  > img {
    position: absolute;
    right: 20px;
  }
`

export default memo(SearchInputStyled)
