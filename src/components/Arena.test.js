import React from 'react';
import Spritesheet from 'react-responsive-spritesheet';
import Arena from './Arena';
import { shallow } from 'enzyme';
import { isMainThread } from 'worker_threads';

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Arena />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})