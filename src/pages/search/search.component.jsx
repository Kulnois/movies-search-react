import React, {useEffect, useState} from 'react';

import { SearchBox } from '../../components/search-box/search-box.component';
import { CardList } from '../../components/card-list/card-list.component';

import { Title } from './search.styles';
import {SpinnerContainer, SpinnerOverlay} from '../../styles/Spinner.styles';

const SearchPage = () => {
    var searchTermDefaul = localStorage.getItem('searchTerm') !== null ? localStorage.getItem('searchTerm') : 'batman';
    const [movies, setMovies] = useState([]);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        fetchMovies(searchTermDefaul);
    }, [])
    

    const fetchMovies = (searchTerm) => {        
        fetch(`https://www.omdbapi.com/?apikey=d0cef94a&s=${searchTerm}`)
            .then(response => response.json())
            .then(data => data.Response === 'True' ? setMovies(data.Search) : setErrorMessage('No results found') )
            .catch(error => setErrorMessage(`Connection error, please check your internet connection -- ${error.message}--`))
    };

    const handleChange = (event) => {
        const searchTerm = event.target.value.trim().toLowerCase();
        setErrorMessage(null)
        if (searchTerm !== '' && searchTerm.length > 3) {            
            localStorage.setItem('searchTerm', searchTerm); 
            fetchMovies(searchTerm);
        } else if (searchTerm.length === 0) {   
            searchTermDefaul = 'batman' 
            fetchMovies(searchTermDefaul);
        }
    };

    const renderContent = () => {
        if (errorMessage) {                
            searchTermDefaul = 'batman'    
            localStorage.setItem('searchTerm', null); 
            return <h3>{errorMessage}</h3>;
        } else if (movies.length > 0) {
            return <CardList movies={movies} />;
        } else {
            return <SpinnerOverlay>
                        <SpinnerContainer />
                    </SpinnerOverlay>;
        }
    }

    return (
        <div>
            <Title>Movies Search</Title>
            <SearchBox
                placeholder="Movies Search"
                handleChange={handleChange} />
            {renderContent()}
        </div>
    );
};

export default SearchPage;