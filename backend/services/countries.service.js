const axios = require('axios');
const dotenv = require('dotenv');
dotenv.config();

// Base URLs
const NAGER_API = process.env.NAGER_API_BASE_URL;
const COUNTRIESNOW_API = process.env.COUNTRIESNOW_API_BASE_URL;

// Função: Buscar lista de países disponíveis
async function fetchAvailableCountries() {
  const response = await axios.get(`${NAGER_API}/AvailableCountries`);
  return response.data;
}

// Função: Buscar detalhes do país
async function fetchCountryDetails(countryCode, countryName) {
    try {
      const [borderResponse, populationResponse, flagResponse] = await Promise.all([
        axios.get(`${NAGER_API}/CountryInfo/${countryCode}`),
        axios.post(`${COUNTRIESNOW_API}/countries/population`, { country: countryName }),
        axios.post(`${COUNTRIESNOW_API}/countries/flag/images`, { country: countryName }),
      ]);
  
      return {
        borders: borderResponse.data.borders || [],
        population: populationResponse.data.data?.populationCounts || [],
        flag: flagResponse.data.data?.flag || '',
      };
    } catch (error) {
      console.error('Erro ao buscar os dados do país:', error.message);
      return {
        borders: [],
        population: [],
        flag: '',
      };
    }
  }
  

module.exports = {
  fetchAvailableCountries,
  fetchCountryDetails,
};
