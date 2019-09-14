const prod = process.env.NODE_ENV === "production";

module.exports = {
  "process.env.BASE_URL": prod
    ? "https://portfolio-rhee.herokuapp.com"
    : "http://localhost:3000",
  "process.env.NAMESPACE": "https://portfolio-rhee.herokuapp.com",
  "process.env.CLIENT_ID": "WrH4Ekk63hsiOGvc7hruEuH6p8RgLaxX"
};