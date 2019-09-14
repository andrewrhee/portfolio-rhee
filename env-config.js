const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://www.andrewrhee.me"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://www.andrewrhee.me",
  "process.env.CLIENT_ID": "WrH4Ekk63hsiOGvc7hruEuH6p8RgLaxX"
};