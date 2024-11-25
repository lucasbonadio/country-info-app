const { fetchAvailableCountries, fetchCountryDetails } = require('../services/countries.service');

async function getAvailableCountries(req, res) {
  try {
    const countries = await fetchAvailableCountries();
    res.json(countries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch available countries.' });
  }
}

async function getCountryInfo(req, res) { 
  const { countryCode } = req.params;
  const { country } = req.body;

  try {
    const countryInfo = await fetchCountryDetails(countryCode, country);
    res.json(countryInfo);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch country details.' });
  }
}

module.exports = {
  getAvailableCountries,
  getCountryInfo,
};