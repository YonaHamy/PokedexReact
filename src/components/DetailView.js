import React from 'react';
import './styles/App.css';

const DetailView = ({pokemon}) => {
    const { id, name, sprite, type } = pokemon;

  return (
    <div class='art2'>
      <h1 class='title'>Pokedex</h1>
      <div class="ecran3"><img src={sprite} className='sprite-image' alt=""/></div>


        <div class="decoG1"></div>
        <div class="decoG2"></div>

        <div class="boutonJ"><h1 className='data-name1'>{id}</h1></div>

        <div class="PetitEcran1"><h4 className='data-name'>{name}</h4></div>
        <div class="PetitEcran2"><h4 className="data-char">{type}</h4></div>

        <div class="boutonG1"></div>
        <div class="boutonG2"></div>

      
    </div>
  )
  
}


export default DetailView;