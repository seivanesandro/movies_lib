//import React from 'react'
import PropTypes from 'prop-types';

import styled, {
    keyframes
} from 'styled-components';
import { devices } from '../../utils/constantes';

//APIS da chave e url
const imageURL = import.meta.env.VITE_IMG;

const Show = keyframes`
    0%{
        opacity:0;
    }
    50%{
        opacity:0.5;
    }

    100%{
        opacity:1;
    }
`;

const CardMovieContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: start;
    gap: 1rem;
    padding: 1rem 4rem;
    max-width: 100%;
    animation: ${Show} 2s linear;

    @media only screen and (${devices.tablet}) {
        align-items: center !important;
        flex-direction: column;
        padding: 2rem 0;
        max-width: 100%;
    }

    @media only screen and (${devices.mobileG}) {
        align-items: center;
        flex-direction: column;
        padding: 2rem 0;
        max-width: 100%;
    }
`;

const StyleImg = styled.img`
    max-width: 100%;
    width: 25%;
    height: 55rem;
    border: 0.1rem solid
        rgba(185, 185, 185, 0.749);

    @media only screen and (${devices.fourk}) {
        width: 22%;
        height: 50rem;
    }

    @media only screen and (${devices.portatilL}) {
        width: 40%;
        height: 55rem;
    }

    @media only screen and (${devices.portatil}) {
        width: 58%;
        height: 53rem;
    }
    @media only screen and (${devices.tablet}) {
        width: 68%;
        height: auto !important;
    }

    @media only screen and (${devices.mobileG}) {
        width: 96%;
        height: auto !important;
    }
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: wrap;
    align-content: stretch;
    gap: 3em;
    padding: 1rem 0;
    margin: 0 1rem 0 1.5rem;

    @media only screen and (${devices.portatilL}) {
        margin: 0 1rem 0 1.5rem;
    }
    @media only screen and (${devices.portatil}) {
        margin: 2rem 1rem 0 1.5rem;
    }
    @media only screen and (${devices.tablet}) {
        margin: 2rem 1rem 0 8.5rem;
    }
    @media only screen and (${devices.iphone14}) {
        margin: 2rem 1rem 0 4.5rem;
    }
    @media only screen and (${devices.mobileG}) {
        margin: 2rem 1rem 0 2.5rem;
    }
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const CardFooter = styled.div`
    max-width: 48%;

    @media only screen and (${devices.portatilL}) {
        max-width: 100%;
    }

    @media only screen and (${devices.tablet}) {
        max-width: 86%;
    }
    @media only screen and (${devices.mobileG}) {
        max-width: 95%;
    }
`;

const MovieDetails = ({ movie }) => {
    const fomartCurrency = number => {
        return number.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    return (
        <>
            <CardMovieContainer className="card-movie-container">
                <StyleImg
                    src={
                        imageURL +
                        movie.poster_path
                    }
                    alt={movie.title}
                />
                <CardBody className="card-body">
                    <CardContent className="card-content-container">
                        <label>
                            title
                            <span>
                                {movie.title}
                            </span>
                        </label>
                        <label>
                            original title
                            <span>
                                {
                                    movie.original_title
                                }
                            </span>
                        </label>
                        <label>
                            original language
                            <span>
                                {
                                    movie.original_language
                                }
                            </span>
                        </label>
                        <label>
                            date release
                            <span>
                                {
                                    movie.release_date
                                }
                            </span>
                        </label>
                        <label>
                            status movie
                            <span>
                                {movie.status}
                            </span>
                        </label>
                        <label>
                            budget movie
                            <span>
                                {fomartCurrency(
                                    movie.budget
                                )}
                            </span>
                        </label>
                        <label>
                            movie time
                            <span>
                                {movie.runtime}{' '}
                                minutes
                            </span>
                        </label>
                        <label>
                            total votes in IMdb
                            <span>
                                {movie.vote_count}{' '}
                                votes
                            </span>
                        </label>
                        <label>
                            movie motivation
                            <span>
                                {movie.tagline}
                            </span>
                        </label>
                    </CardContent>
                    <CardFooter className="card-footer w-100 pt-5">
                        <label>
                            overview
                            <span>
                                {movie.overview}
                            </span>
                        </label>
                    </CardFooter>
                </CardBody>
            </CardMovieContainer>
        </>
    );
};

MovieDetails.propTypes = {
    movie: PropTypes.object.isRequired
};
MovieDetails.defaultProps = {
    movie: {}
};

export default MovieDetails;
