import React, {useEffect, useState} from 'react';

import { SearchBox } from '../../components/search-box/search-box.component';
import { CardList } from '../../components/card-list/card-list.component';

const SearchPage = () => {
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetchMovies();
    }, [])
    

    const fetchMovies = () => {        
        fetch('http://www.omdbapi.com/?i=tt3896198&apikey=d0cef94a&s=batman')
            .then(response => response.json())
            .then(data => data.Search.length > 0 ? setMovies(data.Search) : setErrorMessage('No se encontraron resultados') )
            .catch(error => setErrorMessage(`Error de conexión, por favor compruebe su conexión a internet --${error.message}--`))
    };


    return (
        <div>
            <h1>Movies Search</h1>
            <SearchBox />
            <CardList />
            {movies.map(movie => (
                <div key={movie.imdbID}>{movie.Title}</div>
            ))}
        </div>
    );
};

export default SearchPage;