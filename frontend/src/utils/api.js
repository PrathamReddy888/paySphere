// Base API URL — uses VITE_API_URL env variable in production,
// falls back to localhost for local development.
const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export default API_BASE_URL;
