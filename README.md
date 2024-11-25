# Country Info Backend

This is the backend of the Country Info application. It provides API endpoints to fetch information about countries, including available countries, borders, population, and flags.

## Setup Instructions

Install dependencies:

bash
Copy code
npm install
Set up environment variables by creating a .env file in the root directory with the following variables:

env
Copy code
NAGER_API_BASE_URL=<Nager API base URL>
COUNTRIESNOW_API_BASE_URL=<CountriesNow API base URL>
Start the backend server:

bash
Copy code
npm start
The backend will be available at http://localhost:3001.

API Endpoints
GET /api/countries: Fetches a list of available countries.
POST /api/countries/:countryCode: Fetches detailed information about a specific country (borders, population, flag).
Technologies Used
Node.js (with Express.js)
Axios for making API requests
dotenv for environment variable management
CORS to allow cross-origin requests
Example API Requests
Get Available Countries:
GET /api/countries

Get Country Info (replace countryCode with a valid country code):
POST /api/countries/{countryCode}
Example body:

json
Copy code
{
  "country": "Ukraine"
}
Notes
Ensure that the backend server is running on http://localhost:3001 and the frontend is properly configured to make requests to this backend.