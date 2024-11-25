import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CountryList: React.FC = () => {
  const [countries, setCountries] = useState<{ countryCode: string; name: string }[]>([]);

  // Buscar lista de países
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_API_BASE_URL}/countries`);
        setCountries(response.data); // Armazenar países no estado
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };

    fetchCountries(); // Chama a função ao carregar o componente
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Country List</h1>
      <ul className="space-y-4">
        {countries.length > 0 ? (
          countries.map((country) => (
            <li key={country.countryCode}>
              {/* Passa as informações do país como estado no Link */}
              <Link
                to={`/country/${country.countryCode}`}
                state={{ countryCode: country.countryCode, countryName: country.name }} // Passando o estado
                className="text-blue-500 hover:text-blue-700"
              >
                {country.name}
              </Link>
            </li>
          ))
        ) : (
          <p>No countries available</p>
        )}
      </ul>
    </div>
  );
};

export default CountryList;
