import { useState, useEffect } from 'react';
import styled from 'styled-components';

import Loading from '../components/load/Loading';
import { devices } from '../utils/constantes';
import CardTvSerie from '../components/tvseries/CardTvSerie';

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
const tvserieURL = import.meta.env.VITE_API_TV;
const ApiKey = import.meta.env.VITE_API_KEY;

const TvSeriesPopular = () => {
    const [tvseriespopular, setTvSeriesPopular] =
        useState([]);

    const getTvseriespopular = async url => {
        const res = await fetch(url);
        const data = await res.json();

        setTvSeriesPopular(data.results);
    };

    //chamar a funçao sempre que a pagina for carregada
    useEffect(() => {
        const tvServiesURL = `${tvserieURL}popular?${ApiKey}`;

        getTvseriespopular(tvServiesURL);
    }, []);

    return (
        <>
            {tvseriespopular.length === 0 && (
                <ContainerLoading className="container-loading">
                    <Loading
                        speedborder={1}
                        size={5}
                    />
                </ContainerLoading>
            )}
            <p>Populary TV series</p>
            <ContainerMain className="container-main">
                {tvseriespopular.length > 0 &&
                    tvseriespopular.map(
                        tvserie => (
                            <CardTvSerie
                                key={tvserie.id}
                                tvserie={tvserie}
                            />
                        )
                    )}
            </ContainerMain>
        </>
    );
};

export default TvSeriesPopular;
