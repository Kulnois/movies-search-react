import React, { useEffect, useState } from 'react';

import { CardDetail } from '../../components/card-detail/card-detail.component';

import { SpinnerContainer, SpinnerOverlay } from '../../styles/Spinner.styles';

const DetailPage = ({match}) => {

    
    const [movie, setMovie] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        if (match.params.id) {
            fetchMovies(match.params.id);
        }
    }, [])
    

    const fetchMovies = (idMovie) => {        
        fetch(`https://www.omdbapi.com/?i=${idMovie}&apikey=d0cef94a`)
            .then(response => response.json())
            .then(data => data ? setMovie(data) : setErrorMessage('No se encontraron resultados') )
            .catch(error => setErrorMessage(`Error de conexión, por favor compruebe su conexión a internet --${error.message}--`))
    };

    const renderContent = () => {
        if (errorMessage) {            
            return <h3>{errorMessage}</h3>;
        } else if (movie != null) {
            return <CardDetail movie={movie} />;
        } else {
            return  <SpinnerOverlay>
                        <SpinnerContainer />
                    </SpinnerOverlay>;
        }
    }

    return (
        <div>
            {renderContent()}
        </div>
    );
};

export default DetailPage;