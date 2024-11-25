const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const countriesRoutes = require('./routes/countries.routes');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/countries', countriesRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});