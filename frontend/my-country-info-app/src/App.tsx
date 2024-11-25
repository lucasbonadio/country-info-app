// src/App.tsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import CountryInfo from './components/CountryInfo';

const App: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryCode" element={<CountryInfo />} />
      </Routes>
    </div>
  );
};

export default App;
