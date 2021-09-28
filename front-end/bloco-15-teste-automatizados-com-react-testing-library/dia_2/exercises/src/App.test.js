import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import Digimon from './Digimon';

describe('Teste da aplicação toda', () => {
  it('Verifica se o App é renderizado', async () => {
    render(<App />);
    const inputSearch = screen.getByTestId('search-input');
    const button = screen.getByTestId('search-button');
    const screenText = screen.getByRole('heading')
    expect(inputSearch).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(screenText).toBeInTheDocument();
  });
  it('Verifica se é capturado o valor do input de pesquisa', () => {
    render(<App />);
    const inputSearch = screen.getByTestId('search-input');
    userEvent.type(inputSearch, 'garbagemon');
    expect(inputSearch).toHaveValue('garbagemon');
  });

  it('Verifica se ao clicar no botão é retornado o Digimon especificado', async () => {
    render(<App />);
    const digimon = [{
      name: "Garbagemon",
      img: "https://digimon.shadowsmith.com/img/garbagemon.jpg",
      level: "Ultimate",
    }]
    
    const fetchApi = global.fetch = jest.fn(() => Promise.resolve({
       json: () => Promise.resolve(digimon),
    }))
    
    const button = screen.getByTestId('search-button');
    const inputSearch = screen.getByTestId('search-input');
    userEvent.type(inputSearch, 'garbagemon');
    expect(inputSearch).toHaveValue('garbagemon');
    userEvent.click(button);

    await screen.findByText('level: Ultimate');
    const digimonName = screen.getByTestId('digimonName');
    const digimonLevel = screen.getByTestId('digimonLevel');
    expect(digimonName).toBeInTheDocument();
    expect(digimonLevel).toBeInTheDocument();
    expect(fetchApi).toBeCalledTimes(1);
    expect(fetchApi).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/garbagemon');

  }); 
});