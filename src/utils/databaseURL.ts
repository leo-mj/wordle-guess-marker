export const baseURL =
  process.env.NODE_ENV === "production"
    ? "https://your-project.herokuapp.com"
    : "http://localhost:4000";
