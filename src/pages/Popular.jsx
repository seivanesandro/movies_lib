import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Loading from '../components/load/Loading';
import CardMovie from '../components/movie/CardMovie';
import { devices } from '../utils/constantes';

const ContainerLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
`;
const ContainerMain = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: stretch;
    gap: 3rem;
    margin: 3rem 4rem;
    justify-content: flex-start;

    @media only screen and (${devices.portatilL}) {
        justify-content: space-evenly;
    }
    @media only screen and (${devices.tablet}) {
        justify-content: space-between;
        margin: 2rem 1rem;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 2rem 0;
    }
`;

//APIS da chave e url
const moviesURL = import.meta.env.VITE_API;
const movieApiKey = import.meta.env.VITE_API_KEY;

const PopularMovies = () => {
    const [popularyMovies, setpopularyMovies] =
        useState([]);

    const getPopularydMovies = async url => {
        const res = await fetch(url);
        const data = await res.json();

        setpopularyMovies(data.results);
    };

    //chamar a funçao sempre que a pagina for carregada
    useEffect(() => {
        const popularyURL = `${moviesURL}popular?${movieApiKey}`;

        getPopularydMovies(popularyURL);
    }, []);

    return (
        <>
            {popularyMovies.length === 0 && (
                <ContainerLoading className="container-loading">
                    <Loading
                        speedborder={1}
                        size={5}
                    />
                </ContainerLoading>
            )}
            <p>Populary Movies</p>
            <ContainerMain className="container-main">
                {popularyMovies.length > 0 &&
                    popularyMovies.map(
                        popularyMovie => (
                            <CardMovie
                                key={
                                    popularyMovie.id
                                }
                                movie={
                                    popularyMovie
                                }
                            />
                        )
                    )}
            </ContainerMain>
        </>
    );
};

export default PopularMovies;
