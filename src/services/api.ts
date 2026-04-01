import axios from "axios";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
});

// ── Attach JWT to every request ──
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("brift_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// ── Handle 401 globally ──
api.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest.url.includes("/login")
    ) {
      localStorage.removeItem("brift_token");
      localStorage.removeItem("brift_user");
    }

    return Promise.reject(error);
  },
);
export default api;
