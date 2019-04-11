import React from 'react'
import Login from './Login'
import {shallow} from 'enzyme'
import { isMainThread } from 'worker_threads';


describe('Header', () => {
  let wrapper 
  let display = jest.fn()
  let getUser = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Login display={display} getUser={getUser}/>)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})