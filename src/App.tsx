import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import FavoritesPage from './pages/FavoritesPage/FavoritesPage';
import HomePage from './pages/HomePage/HomePage';
import TeachersPage from './pages/TeachersPage/TeachersPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="teachers" element={<TeachersPage />} />
        <Route path="favorites" element={<FavoritesPage />} />
      </Route>
    </Routes>
  );
}

export default App;
