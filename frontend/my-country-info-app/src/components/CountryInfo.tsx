import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const CountryDetails: React.FC = () => {
  const location = useLocation(); // Pega o estado passado via Link
  const { countryCode, countryName } = location.state; // Desestrutura as informações do país

  const [countryDetails, setCountryDetails] = useState<any>(null);

  useEffect(() => {
    const fetchCountryDetails = async () => {
      try {
        // Fazendo o POST com as informações do país
        const response = await axios.post(
          `${import.meta.env.VITE_API_BASE_URL}/countries/${countryCode}`,
          { country: countryName }
        );

        console.log(response.data);
        setCountryDetails(response.data); // Armazenando a resposta no estado
      } catch (error) {
        console.error("Error fetching country details:", error);
      }
    };

    fetchCountryDetails(); // Chama a função ao carregar o componente
  }, [countryCode, countryName]); // Dependência de mudança do código ou nome do país

  return (
    <div className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Country Details</h1>
      <h2 className="text-xl mb-2">{countryName}</h2>
      {countryDetails ? (
        <div>
          <p>
            <strong>Borders:</strong>{" "}
            {Array.isArray(countryDetails.borders) ? (
              countryDetails.borders.map((border: any, index: any) => (
                <div key={index} className="p-2 border rounded-md mb-2">
                  <p>
                    <strong>Common Name:</strong> {border.commonName}
                  </p>
                  <p>
                    <strong>Official Name:</strong> {border.officialName}
                  </p>
                  <p>
                    <strong>Country Code:</strong> {border.countryCode}
                  </p>
                  <p>
                    <strong>Region:</strong> {border.region}
                  </p>
                  {/* Aqui você pode colocar um link para acessar as informações do país vizinho */}
                  <p>
                    <a
                      href={`/country/${border.countryCode}`}
                      className="text-blue-500 hover:text-blue-700"
                    >
                      View {border.commonName} Info
                    </a>
                  </p>
                </div>
              ))
            ) : (
              <p>No border countries available</p>
            )}
          </p>

          <p>
            <strong>Population:</strong>{" "}
            {Array.isArray(countryDetails.population) ? (
              countryDetails.population.map(
                (item: { year: number; value: number }, index: number) => (
                  <div key={index} className="p-2 border rounded-md">
                    <p>
                      <strong>Year:</strong> {item.year}
                    </p>
                    <p>
                      <strong>Population:</strong> {item.value.toLocaleString()}
                    </p>{" "}
                    {/* Usando toLocaleString para formatar os números */}
                  </div>
                )
              )
            ) : (
              <p>No population data available</p>
            )}
          </p>
          <p>
            <strong>Flag:</strong>{" "}
            <img
              src={countryDetails.flag}
              alt={countryName}
              className="w-24 h-auto"
            />
          </p>
        </div>
      ) : (
        <p>Loading country details...</p>
      )}
    </div>
  );
};

export default CountryDetails;
