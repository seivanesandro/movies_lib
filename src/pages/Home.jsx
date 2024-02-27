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

//APIS da chave e url
const moviesURL = import.meta.env.VITE_API;
const movieApiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState(
        []
    );

    const getTopRatedMovies = async url => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
    };

    //chamar a funçao sempre que a pagina for carregada
    useEffect(() => {
        const topRatedURL = `${moviesURL}top_rated?${movieApiKey}`;

        getTopRatedMovies(topRatedURL);
    }, []);

    return (
        <>
            {topMovies.length === 0 && (
                <ContainerLoading className="container-loading">
                    <Loading
                        speedborder={1}
                        size={5}
                    />
                </ContainerLoading>
            )}
            <p>Top Rating</p>
            <HomeMain className="home-main">
                {topMovies.length > 0 &&
                    topMovies.map(topMovie => (
                        <CardMovie
                            key={topMovie.id}
                            movie={topMovie}
                        />
                    ))}
            </HomeMain>
        </>
    );
};

export default Home;
