import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

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
  it('Verifica se é retornado na tela uma mensagem de erro caso tenha sido digitado um Digimon Inexistente', async () => {
    render(<App />);
    const errorMsg = {
      ErrorMsg: "Digimon is not a Digimon in our database."
      }
    
    const fetchApi = global.fetch = jest.fn(() => Promise.resolve({
       json: () => Promise.resolve(errorMsg),
    }))
    
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toHaveValue('');
    userEvent.type(inputSearch, 'Digimon');
    expect(inputSearch).toHaveValue('Digimon');

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    const errorText = await screen.findByRole('heading', { name: 'Digimon is not a Digimon in our database.' });
    expect(errorText).toBeInTheDocument();
    expect(fetchApi).toBeCalledTimes(1);
    expect(fetchApi).toBeCalledWith('https://digimon-api.vercel.app/api/digimon/name/Digimon');
  });
  it('Verifica se é retornado na tela uma mensagem de erro caso nada tenha sido digitado na pesquisa', async () => {
    render(<App />);
    const inputSearch = screen.getByTestId('search-input');
    expect(inputSearch).toHaveValue('');

    userEvent.type(inputSearch, '');
    expect(inputSearch).toHaveValue('');

    const button = screen.getByTestId('search-button');
    userEvent.click(button);

    expect(global.fetch).toBeCalledTimes(1);
  });

});