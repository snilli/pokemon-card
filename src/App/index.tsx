import React, {FC, useCallback, useEffect} from 'react'
import './App.css'
import {fetchCard} from '../redux/reducer/card/card-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/store'
import Header from '../Component/Header'
import Footer from '../Component/BottomBar'
import Decklist from '../Component/Cardlist'
import Modal from '../Component/Modal'

const App: FC = () => {
    const dispatch = useDispatch()
    const cardIds = useSelector<RootState>(state => state.card.ids) as number[]
    const isOpenModal = useSelector<RootState>(state => state.ui.isOpenModal)
    const selectedCards = useSelector<RootState>(state => state.ui.selectedCard)
    const searchCards = useSelector<RootState>(state => state.ui.searshCard)
    const fetchCardCallBack = useCallback(() => dispatch(fetchCard()), [dispatch])

    useEffect(() => {
        if (cardIds.length === 0) {
            fetchCardCallBack()
        }
    }, [fetchCardCallBack, cardIds.length])

    return (
        <div className="App">
            <Header/>
            <Decklist cards={selectedCards}/>
            <Footer/>
            {isOpenModal && <Modal cards={searchCards}/>}
        </div>
    )
}

export default App
