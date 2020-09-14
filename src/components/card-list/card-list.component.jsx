import React from 'react';
import Card from '../card/card.component';

import { Container } from './card-list.styles';

export const CardList = ({ movies }) => (
    <Container>
        {
            movies.map(movie => (
                <Card key={movie.imdbID} movie={movie} />
            ))
        }
    </Container>
);