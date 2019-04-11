import React from 'react'
import NextLocation from './NextLocation'
import { shallow } from 'enzyme'
import { isMainThread } from 'worker_threads';


describe('Header', () => {
  let wrapper
  let quest = {}
  let goBack = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<NextLocation quest={quest} getUser={goBack} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})