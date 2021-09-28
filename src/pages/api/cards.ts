import type {NextApiHandler} from 'next'
import _ from 'lodash'
import {cards} from '../../../mock/cards.json'

const cardsHandler: NextApiHandler = async (request, response) => {
    const {name, type, limit} = request.query

    if (_.every([name, type], item => item === undefined)) {
        return response.json({cards: cards.slice(0, parseInt(limit.toString()) ?? 20)})
    }

    response.json({
        cards: _.filter(cards, card => {
            const name = _.toUpper(_.get(request, 'query.name', ''))
            const type = _.toUpper(_.get(request, 'query.type', ''))
            const checkName = _.includes(_.toUpper(card.name), name)
            const checkType = _.includes(_.toUpper(card.type), type)
            return checkName && checkType
        }),
    })
}

export default cardsHandler
