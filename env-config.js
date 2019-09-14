const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "http://www.andrewrhee.me"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "http://www.andrewrhee.me",
  "process.env.CLIENT_ID": "WrH4Ekk63hsiOGvc7hruEuH6p8RgLaxX"
};