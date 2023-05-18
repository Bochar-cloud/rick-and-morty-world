import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import { AppRoute } from './consts/app-route';
import MainPage from './pages/MainPage/MainPage';
import CharactersPage from './pages/CharactersPage/CharactersPage';
import LocationsPage from './pages/LocationsPage/LocationsPage';
import EpisodesPage from './pages/EpisodesPage/EpisodesPage';
import CharacterPage from './pages/CharacterPage/CharacterPage';

const App = () => {
    return (
        <>
            <Header />

            <Routes>
                <Route
                    path={AppRoute.Home}
                    element={<MainPage />}
                />
                <Route
                    path={AppRoute.Characters}
                    element={<CharactersPage />}
                />
                <Route
                    path={AppRoute.Character}
                    element={<CharacterPage />}
                />
                <Route
                    path={AppRoute.Locations}
                    element={<LocationsPage />}
                />
                <Route
                    path={AppRoute.Episodes}
                    element={<EpisodesPage />}
                />
            </Routes>
        </>
    );
};

export default App;
