import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import DetailDisplay from './DetailDisplay';
import { getById } from '../../services/character-api';
import { MemoryRouter, Route } from 'react-router-dom';

jest.mock('../../services/character-api.js');

describe('DetailDisplay component', () => {
  it('display a character after loading', () => {
    getById.mockResolvedValue({
      id: 1,
      name: 'Ian Faith',
      image: 'https://pbs.twimg.com/media/Du0DfFwVYAEmLlc.jpg',
      quote: 'Well, you should have seen the cover they WANTED to do! It wasn\'t a glove, believe me.',
      role: 'Manager'

    });
    render(
      <MemoryRouter initialEntries={['/detail/1']}>
        <Route path="/detail/:id" component={DetailDisplay}/>
      </MemoryRouter>
    );

    return waitFor(() => {
      screen.getByText('Name: Ian Faith');
      screen.getByAltText('Ian Faith');
      screen.getByText('Role: Manager');
      
      
    });

  });
});
