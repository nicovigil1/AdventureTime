import React from 'react'
import Welcome from './Welcome'
import { shallow } from 'enzyme'
import { isMainThread } from 'worker_threads';


describe('Header', () => {
  let wrapper
  let location = ""
  let currentUser = {}
  let setTheState = jest.fn()

  beforeEach(() => {
    wrapper = shallow(<Welcome currentUser={currentUser}
      location={location}
      setTheState={setTheState} />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})