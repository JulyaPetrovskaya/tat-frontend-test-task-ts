import { Routes, Route } from 'react-router-dom';
import SearchPage from './pages/SearchPage';
import TourPage from './pages/TourPage';
import { SearchProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchProvider>
      <Routes>
        <Route path='/' element={<SearchPage />} />
        <Route path='/tour/:priceId' element={<TourPage />} />
      </Routes>
    </SearchProvider>
  );
}

export default App;
