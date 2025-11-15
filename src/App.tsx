import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import TourPage from './pages/TourPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SearchPage />} />
      <Route path="/tour/:priceId" element={<TourPage />} />
    </Routes>
  );
}

export default App;
