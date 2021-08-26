import React, {Component} from 'react';
import { CardList } from './components/cardlist/cardlist';
import { SearchBox } from './components/searchbox/searchbox';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      pokemons: [],
      search:''
    };
  }

  componentDidMount(){
    fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
    .then(response => response.json())
    .then(name => this.setState({pokemons:name.results}));
  }

  handleChange=(e) => {
    this.setState({search: e.target.value});
  };

  render(){

    const {pokemons, search } = this.state;
    const fileteredPokemons = pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(search.toLowerCase()));

    return(
      <div className="App">
        <h1>Pokédex</h1>
        <SearchBox
          placeholder='Search Pokemon'
          handleChange= {this.handleChange}
        />
        <CardList pokemons={fileteredPokemons}></CardList>

      </div>
    );
  }
}

export default App;
