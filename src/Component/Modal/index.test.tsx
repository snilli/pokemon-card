import React from 'react'
import renderer from 'react-test-renderer'
import Modal from './index'

describe('Modal', () => {
    test('test snap shot', () => {
        const component = renderer.create(<Modal/>)
        const tree = component.toJSON()
        expect(tree).toMatchSnapshot()
    })
})
