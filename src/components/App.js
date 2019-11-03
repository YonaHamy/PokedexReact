import React, { Component } from 'react';
import './styles/App.css';
import PokeList from './PokeList';
import DetailView from './DetailView';
import Pokemon from '../Pokemon';
import Form from './form';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {} 

    };

    this.handleOnClick = this.handleOnClick.bind(this);

  }

  handleOnClick(id) {
    fetch(`http://pokeapi.co/api/v2/pokemon/${id}/`)
      .then(res => res.json())
      .then(data => {
        const pokemon = new Pokemon(data);

        this.setState({ pokemon });
      })
      .catch(err => console.log(err));
      
  }

  handleSubmit = this.handleSubmit.bind(this);

  handleSubmit(ev) {
    ev.preventDefault();
    this.setState({
      value: new FormData(ev.currentTarget).get('filter'),
    });
  }

  render() {
    return (
      <div className='App'>
        <div class="art1">
        
        <article class="lentille"></article>
			  <article class="btrouge"></article>
			  <article class="btjaune"></article>
			  <article class="btvert"></article>

        <div className="Recherche"><Form handleSubmit={this.handleSubmit} value={this.state.value} /></div>
        <div class="ecran1"></div>
        <div class="ecran2">
        <PokeList handleOnClick={this.handleOnClick} />

        </div>
        <div class="cri" ></div>
        <div class="manette"></div>
          <div class="manette1"></div>
          <div class="manette2"></div>
        
        <div class="manette3"></div>
        <div class="manette4"></div>
        <div class="decoR"></div>
        <div class="decoB"></div>
        <div class="nom"></div>
        
        </div>
			  <div class="fermeture"></div>
        <div class="fermeture2"></div>
        <div class="fermeture3"></div>
		    <DetailView pokemon = {this.state.pokemon} />

      
    </div>
    );
  }
}


export default App;