
import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('renders Character component', () => {
    const { asFragment } = render(<Character name="Nigel" image="www.rock.com" />);

    expect(asFragment()).toMatchSnapshot();
  });
});
