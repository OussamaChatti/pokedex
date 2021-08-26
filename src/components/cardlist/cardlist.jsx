import React from 'react';
import { Card } from '../card/card';

import './cardlist.css';


export const CardList = props => (
    <div className='cardlist'>
        {props.pokemons.map(pokemon =>(
        <Card key={pokemon.name} pokemon={pokemon}></Card>
        ))}
    </div>
);
