import { create } from "axios";

const api = create({
  baseURL: import.meta.env.VITE_API_URL,
});

api.interceptors.response.use((response) => {
  const contentType = String(response.headers["content-type"] ?? "");

  if (!contentType.includes("application/json")) {
    throw new Error(
      `Expected JSON from ${response.config.url} but the server sent "${contentType || "no content-type"}". ` +
        "Check that VITE_API_URL points to the API server. If it is unset, " +
        "the request may resolve to this site's SPA fallback and return index.html.",
    );
  }

  return response;
});

export default api;
