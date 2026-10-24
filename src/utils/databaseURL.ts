export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://wordle-clone-backend.onrender.com/"
    : "http://localhost:4000/";

// request config for routes that need a logged-in user; the token comes from logging in or registering
export const authHeader = (
  token: string
): { headers: { Authorization: string } } => ({
  headers: { Authorization: `Bearer ${token}` },
});
