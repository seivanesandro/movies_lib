import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';

function App() {
    return (
        <div className="app_movies_lib">
            <NavBar />
            <div className="main">
                <Outlet />
            </div>
        </div>
    );
}

export default App;
