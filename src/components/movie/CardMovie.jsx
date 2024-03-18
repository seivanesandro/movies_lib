//import React from 'react'
import { Link } from 'react-router-dom';
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

const CardContainer = styled.div`
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
    @media only screen and (${devices.iphone14}) {
        width: 101%;
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

const CardMovie = ({ movie, showLink }) => {
    return (
        <>
            <CardContainer className="card">
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
                            <Link
                            disable
                                className="style"
                                to={`/movie/${movie.id}`}
                            >
                                {' '}
                                Details
                            </Link>
                        )}
                    </CardFooter>
                </CardBody>
            </CardContainer>
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
