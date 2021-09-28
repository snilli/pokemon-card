import React, {useCallback, useEffect} from 'react'
import {fetchCard} from '../redux/reducer/card/card-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../redux/reducer'
import Header from '../Component/Header'
import Footer from '../Component/BottomBar'
import Decklist from '../Component/Cardlist'
import Modal from '../Component/Modal'

const PokemonCard: React.FC = () => {
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
            <style jsx global>{`
              body {
                margin: 0;
                padding: 0;
                /*font-family: sans-serif;*/
                font-family: 'Atma', cursive;
              }

              #root {
                width: 1024px;
                height: 768px;
                margin: 50px auto;
                border-color: #353535;
                border-radius: 40px;
                border-width: 28px 103px 28px 74px;
                border-style: solid;
                position: relative;
              }

              #root:before {
                content: "";
                position: absolute;
                left: -80px;
                transform: rotate(270deg);
                background: url(https://cdn-images-1.medium.com/fit/c/200/200/1*PKHCHuLxDyZ8SV3PKxzizA.png) no-repeat center center / 100%;
                width: 85px;
                height: 180px;
                top: 40%;
              }

              #root:after {
                content: "";
                width: 60px;
                height: 60px;
                border-radius: 50px;
                background: #5c5c5c;
                position: absolute;
                right: -79px;
                top: 50%;
                border: 1px inset #7b7b7b;
              }

            `}</style>
            <Header/>
            <Decklist cards={selectedCards}/>
            <Footer/>
            {isOpenModal && <Modal cards={searchCards}/>}
        </div>
    )
}

export default PokemonCard
