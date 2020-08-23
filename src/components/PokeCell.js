import React from 'react';
import sprites from '../assets/sprites.png';
import './styles/PokeCell.css';
import { render } from '@testing-library/react';

const PokeCell = ({ pokeClass, handleOnClick }) => {
  const { id, backgroundPosition } = pokeClass;
  const style = { backgroundImage: `url(${sprites})`, backgroundPosition };
  return <button onClick={() => handleOnClick(id)} style={style} className="poke-cell"></button>

};

// const Favorite =()=>{
//   return <button>Favorite</button>
//   }

export default PokeCell;
