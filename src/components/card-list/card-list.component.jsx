import React from 'react';
import { Card } from '../card/card.component';

export const CardList = ({ movies }) => (
    <div>
        {
            movies.map(movie => (
                <Card key={movie.imdbID} movie={movie} />
            ))
        }
    </div>
);