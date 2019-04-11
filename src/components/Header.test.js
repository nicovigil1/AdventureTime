import React from 'react';
import Header from './Header';
import {shallow} from 'enzyme';
import { isMainThread } from 'worker_threads';

describe('Header', () => {
  let wrapper

  beforeEach(() => {
    wrapper = shallow(<Header />)
  })

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})