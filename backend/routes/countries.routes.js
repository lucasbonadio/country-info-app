const express = require('express');
const { getAvailableCountries, getCountryInfo } = require('../controllers/countries.controller');

const router = express.Router();

router.get('/', getAvailableCountries);
router.post('/:countryCode', getCountryInfo);

module.exports = router;