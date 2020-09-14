import React from 'react';

import { Container, ImageContainer, Content, Genre, ImdbRating, Description, Title, Button } from './card-detail.styles';

export const CardDetail = ({movie}) => {

    const genders = movie.Genre.split(',');

    return(
        <div>            
        <Title>{movie.Title}</Title>
            <Container>
        <ImageContainer>
            <img alt="movie" src={movie.Poster} />
        </ImageContainer>
        <Content>
            <ImdbRating>{movie.imdbRating} / 10</ImdbRating>
            {
                genders.map(genre => (
                    <Genre>{genre}</Genre>
                ))
            }
            <Description><span>Year:</span> {movie.Year}</Description>
            <Description><span>Duration:</span> {movie.Runtime}</Description>
            <Description><span>Director:</span> {movie.Director}</Description>
            <Description>{movie.Plot}</Description>
            <Description><span>Country:</span> {movie.Country}</Description>
            <Description><span>Language:</span> {movie.Language}</Description>
            <Description><span>Actors:</span> {movie.Actors}</Description>
        </Content>
</Container>
        </div>
    )
};