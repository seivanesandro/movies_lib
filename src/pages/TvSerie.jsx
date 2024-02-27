import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import TvSeriesDetails from '../components/tvseries/TvServiesDetails';

//APIS da chave e url
const tvseriesURL = import.meta.env.VITE_API_TV;
const ApiKey = import.meta.env.VITE_API_KEY;

const TvSerie = () => {
    const { id } = useParams();

    const [tvSerie, setTvSerie] = useState(null);

    const getTvSerie = async url => {
        const res = await fetch(url);
        const data = await res.json();

        setTvSerie(data);
    };

    //chamar a funçao sempre que a pagina for carregada
    useEffect(() => {
        const tvSerieURL = `${tvseriesURL}${id}?${ApiKey}`;
        getTvSerie(tvSerieURL);
    }, []);

    return (
        <div>
            {tvSerie && (
                <>
                    <TvSeriesDetails
                        tvserie={tvSerie}
                    />
                </>
            )}
        </div>
    );
};

export default TvSerie;
