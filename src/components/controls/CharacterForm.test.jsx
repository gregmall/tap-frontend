import React from 'react';
import { render } from '@testing-library/react';
import CharacterForm from './CharacterForm';

describe ('WordForm controller component', () => {
  it('should render a form to add a character to the screen', () => {
    const { asFragment } = render(
      <CharacterForm 
        name="Steve Johnson"
        image="www.rockandroll.com"
        quote="live and die for music"
        role="roadie"
        onChange={() => { }}

      />)
      
      expect(asFragment()).toMatchSnapshot()

  })

})
