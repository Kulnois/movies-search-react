import React from 'react';

export const Card = ({ movie }) => (
    <div>
        <img alt="movie" src={movie.Poster} />
        <h2>{movie.Title}</h2>
        <p>Year: {movie.Year}</p>
    </div>
);