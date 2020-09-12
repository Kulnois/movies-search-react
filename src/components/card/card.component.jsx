import React from 'react';

import { Container, Image, Content, Title, Year } from './card.styles';

export const Card = ({ movie }) => (
    <Container>
        <Image alt="movie" src={movie.Poster} />
        <Content>
            <Title>{movie.Title}</Title>
            <Year>Year: {movie.Year}</Year>            
        </Content>
    </Container>
);