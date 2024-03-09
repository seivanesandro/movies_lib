//import React from 'react'
import { Link  } from 'react-router-dom'
import PropTypes from 'prop-types';
import { BsFillStarFill } from 'react-icons/bs';

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
    flex-direction: column;
    width: 15%;
    max-width: 100%;
    animation: ${Show} 2.5s linear;

    @media only screen and (${devices.portatilL}) {
        width: 33%;
    }
    @media only screen and (${devices.portatil}) {
        width: 43%;
    }

    @media only screen and (${devices.tablet}) {
        width: 41%;
    }

    @media only screen and (${devices.mobileG}) {
        width: 100%;
    }

    &:hover {
        box-shadow: 0 0 0.5rem #24c6dc;
    }
`;

const ContainerImg = styled.img`
    width: 100%;
    height: 100%;
    max-height: 100%;
    max-width: 100%;
    border: 0.5px solid #fff;
`;

const CardBody = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
`;

const CardContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 0.5em;
    max-width: 100%;
`;

const CardFooter = styled.div`
    max-width: 100%;
    text-align: center;
    margin: 2rem auto;
`;

const StyleLink = styled.a`
    font-size: 0.9rem !important;
    border-radius: 6px;
    background: #24c6dc !important;
    color: #333 !important;
    padding: 1rem 4em;
    cursor: pointer;
    transition: 0.5s !important;

    &:hover {
        color: #fafafa !important;
        background: #1ea0b1 !important;
        box-shadow: 0 0 0.2rem #333;
        transition: 0.5s !important;
    }

    @media only screen and (${devices.mobileP}) {
        padding: 1rem 3rem;
        transition: 0.5s !important;
    }
    @media only screen and (${devices.tablet}) {
        padding: 1rem 4rem;
        transition: 0.5s !important;
    }
`;

const CardMovie = ({ movie, showLink }) => {
    return (
        <>
            <CardMovieContainer className="card">
                <ContainerImg
                    src={
                        imageURL +
                        movie.poster_path
                    }
                    alt={movie.title}
                    className="card-image rounded-top"
                />
                <CardBody className="card-body">
                    <h2>{movie.title}</h2>
                    <CardContent className="card-content">
                        <BsFillStarFill
                            color="gold"
                            size={20}
                        />
                        <span>
                            {movie.vote_average}
                        </span>
                    </CardContent>

                    <CardFooter className="card-footer w-100 pt-5">
                        {showLink && (
                            <StyleLink>
                                <Link
                                    to={`/movie/${movie.id}`}
                                >
                                    {' '}
                                    Details
                                </Link>
                            </StyleLink>
                        )}
                    </CardFooter>
                </CardBody>
            </CardMovieContainer>
        </>
    );
};

CardMovie.propTypes = {
    movie: PropTypes.object.isRequired,
    showLink: PropTypes.bool.isRequired
};

CardMovie.defaultProps = {
    movie: {},
    showLink: true
};

export default CardMovie;
