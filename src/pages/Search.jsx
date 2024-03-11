import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import CardMovie from '../components/movie/CardMovie';
import CardTvSerie from '../components/tvseries/CardTvSerie';
import Loading from '../components/load/Loading';

import styled from 'styled-components';
import { devices } from '../utils/constantes';

const ContainerLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 4rem;
`;

const HomeMain = styled.div`
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

//api seach and api Key
const searchURL = import.meta.env.VITE_SEARCH;
const searchTvSeriesURL = import.meta.env
    .VITE_SEARCH_TV;
const searchApiKey = import.meta.env.VITE_API_KEY;

const Search = () => {
    const [searchParams] = useSearchParams();

    const [searchMovies, setSearchMovies] =
        useState([]);

    const [searchTvseries, setsearchTvseries] =
        useState([]);

    const query = searchParams.get('q');

    const getSearchMovies = async url => {
        const res = await fetch(url);
        const data = await res.json();

        setSearchMovies(data.results);
    };

    const getSearchTv = async url => {
        const res = await fetch(url);
        const data = await res.json();

        setsearchTvseries(data.results);
    };

    //chamar a funçao sempre que a pagina for carregada
    useEffect(() => {
        const searchMovieWithQueryURL = `${searchURL}?${searchApiKey}&query=${query}`;
        const searchTvWithQueryURL = `${searchTvSeriesURL}?${searchApiKey}&query=${query}`;
        getSearchMovies(searchMovieWithQueryURL);
        getSearchTv(searchTvWithQueryURL);
    }, [query]);

    return (
        <>
            {searchMovies.length === 0 ? (
                <p>
                    No Movies were found:{' '}
                    <strong> {query}</strong>
                </p>
            ) : (
                <p>
                    Movie results:
                    <strong> {query}</strong>
                </p>
            )}
            {searchMovies.length === 0 && (
                <ContainerLoading className="container-loading">
                    <Loading
                        speedborder={1}
                        size={5}
                    />
                </ContainerLoading>
            )}
            <HomeMain className="home-main">
                {searchMovies.length > 0 &&
                    searchMovies.map(
                        searchMovie => (
                            <CardMovie
                                key={
                                    searchMovie.id
                                }
                                movie={
                                    searchMovie
                                }
                            />
                        )
                    )}
            </HomeMain>
            {searchTvseries.length === 0 ? (
                <p>
                    No TV Series were found:{' '}
                    <strong> {query}</strong>
                </p>
            ) : (
                <p>
                    Tv Series results:
                    <strong> {query}</strong>
                </p>
            )}
            {searchTvseries.length === 0 && (
                <ContainerLoading className="container-loading">
                    <Loading
                        speedborder={1}
                        size={5}
                    />
                </ContainerLoading>
            )}
            <HomeMain className="home-main">
                {searchTvseries.length > 0 &&
                    searchTvseries.map(
                        searchTvserie => (
                            <CardTvSerie
                                key={
                                    searchTvserie.id
                                }
                                tvserie={
                                    searchTvserie
                                }
                            />
                        )
                    )}
            </HomeMain>
        </>
    );
};

export default Search;
