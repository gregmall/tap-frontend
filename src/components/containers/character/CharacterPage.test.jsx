import React from 'react';
import { render } from '@testing-library/react';
import CharacterPage from './CharacterPage';
import { MemoryRouter, Route } from 'react-router-dom';
import { getCharacters } from '../../../services/character-api';

jest.mock('../../../services/character-api.js');
describe('Character Page component', () => {
  getCharacters.mockResolvedValue(
    {
      name: "Ian Faith",
        image: "https://pbs.twimg.com/media/Du0DfFwVYAEmLlc.jpg",
        quote: "Well, you should have seen the cover they WANTED to do! It wasn't a glove, believe me.",
        role: "Manager"
    },
    {
        name: "Nigel Tufnel",
        image: "https://miro.medium.com/max/676/0*THmfYKSeYsMtU2yi.jpg",
        quote: "This one goes to eleven.",
        role: "Lead guitar, mandolin"
    }
  );
  it('renders character component', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Route path="/" component={CharacterPage}/>
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();

  });
});
