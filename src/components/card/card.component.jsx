import React from 'react';
import { withRouter } from 'react-router-dom';
 
import { Container, Image, Content, Title, Year } from './card.styles';

const Card = ({ movie, history, match }) => (
    <Container onClick={() => history.push(`${match.url}detail/${movie.imdbID}`)}>
        <Image alt="movie" src={movie.Poster} />
        <Content>
            <Title>{movie.Title}</Title>
            <Year>Year: {movie.Year}</Year>            
        </Content>
    </Container>
);

export default withRouter(Card);