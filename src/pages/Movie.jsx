import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MovieDetails from '../components/movie/MovieDetails';

//APIS da chave e url
const moviesURL = import.meta.env.VITE_API;
const movieApiKey = import.meta.env.VITE_API_KEY;

const Movie = () => {
    const { id } = useParams();

    const [movie, setMovie] = useState(null);

    const getMovie = async url => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
    };

    //chamar a funçao sempre que a pagina for carregada
    useEffect(() => {
        const movieURL = `${moviesURL}${id}?${movieApiKey}`;
        getMovie(movieURL);
    }, []);

    return (
        <div>
            {movie && (
                <>
                    <MovieDetails movie={movie} />
                </>
            )}
        </div>
    );
};

export default Movie;
