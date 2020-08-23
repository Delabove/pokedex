import React from 'react';
import PokeCell from './PokeCell';
import { pokeClasses } from '../pokeClasses';
import './styles/PokeList.css';


const PokeList = ({ handleOnClick }) => {
  const cells = pokeClasses.map(pokeClass => {
    return (
      <PokeCell
        key={pokeClass.id}
        pokeClass={pokeClass}
        handleOnClick={handleOnClick}
      />
    );
  });

  return (
    <section className="poke-list">
      {cells}
    </section>
  )
}
export default PokeList;
    //Instead of manually placing each PokeCell
    //inside the parent element,  place
    //the cells array, and React will append each of
    // the PokeCells to the list component.