import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import {
    //BrowserRouter,
    Routes,
    Route,
    //Switch,
    HashRouter,
} from 'react-router-dom';

//components
//pages
import Search from './pages/Search.jsx';
import Home from './pages/Home.jsx';
import Movie from './pages/Movie.jsx';
import PopularMovies from './pages/Popular.jsx';
import UpCommingMovies from './pages/UpCommingMovies.jsx';
import TvSeriesPopular from './pages/TvSeriesPopular.jsx';
import TvSerie from './pages/TvSerie.jsx';

ReactDOM.createRoot(
    document.getElementById('root')
).render(
    <React.StrictMode>
        <HashRouter>
            <Routes>
                
                    <Route element={<App />}>
                        <Route
                            path="/"
                            element={<Home />}
                        />
                        <Route
                            path="/populary"
                            element={
                                <PopularMovies />
                            }
                        />
                        <Route
                            path="/upcoming"
                            element={
                                <UpCommingMovies />
                            }
                        />
                        <Route
                            path="/tvseriespopular"
                            element={
                                <TvSeriesPopular />
                            }
                        />
                        <Route
                            path="tvserie/:id"
                            element={<TvSerie />}
                        />
                        <Route
                            path="movie/:id"
                            element={<Movie />}
                        />
                        <Route
                            path="search"
                            element={<Search />}
                        />
                    </Route>

            </Routes>
        </HashRouter>
    </React.StrictMode>
);
