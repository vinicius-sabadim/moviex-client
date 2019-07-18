import React from 'react'
import { shallow } from 'enzyme'
import Rating from './Rating'

describe('Rating', () => {
  test('should show the popup to rate when clicked on rate this', () => {
    const component = shallow(<Rating />)
    const toggleArea = component.find('#rate-this-toggle')

    toggleArea.simulate('click')
    expect(component).toMatchSnapshot()
  })
})
