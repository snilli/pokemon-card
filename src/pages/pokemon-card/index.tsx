import React, {useCallback, useEffect} from 'react'
import {fetchCard} from '../../redux/reducer/card/card-reducer'
import {useDispatch, useSelector} from 'react-redux'
import {RootState} from '../../redux/reducer'
import Header from '../../Component/Header'
import Footer from '../../Component/BottomBar'
import Decklist from '../../Component/Cardlist'
import Modal from '../../Component/Modal'

const Index: React.FC = () => {
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
        <div className="App" style={{
            margin: 0,
            padding: 0,
            fontFamily: '\'Atma\', cursive',
        }}>
            <style jsx>{`
              #content {
                width: 1024px;
                height: 768px;
                margin: 50px auto;
                border-color: #353535;
                border-radius: 40px;
                border-width: 28px 103px 28px 74px;
                border-style: solid;
                position: relative;
              }

              #content:before {
                content: "";
                position: absolute;
                left: -80px;
                transform: rotate(270deg);
                background: url(https://cdn-images-1.medium.com/fit/c/200/200/1*PKHCHuLxDyZ8SV3PKxzizA.png) no-repeat center center / 100%;
                width: 85px;
                height: 180px;
                top: 40%;
              }

              #content:after {
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
            <div id="content">
                <Header/>
                <Decklist cards={selectedCards}/>
                <Footer/>
            </div>
            {isOpenModal && <Modal cards={searchCards}/>}
        </div>
    )
}

export default Index
