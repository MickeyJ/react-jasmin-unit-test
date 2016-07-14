import React from 'react'
import {findDOMNode} from 'react-dom'
import Artist from '../src/Artist'
import TestUtils from 'react-addons-test-utils'

describe('Artist', () =>{
  let component;

  beforeEach(() =>{
    component  = TestUtils.renderIntoDocument(<Artist name="Run the Jewels"/>);
  });

  it('should display the correct artist name', () =>{
    expect(findDOMNode(component).innerText).toMatch(/Artist name: Run the Jewels/)
  })
});
