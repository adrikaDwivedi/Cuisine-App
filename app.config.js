import 'dotenv/config';
// this file wraps the static app.json and injects values from process.env
const appJson = require('./app.json');

export default {
  ...appJson,
  expo: {
    ...appJson.expo,
    extra: {
      // read API key from environment (dotenv will load .env automatically)
      API_KEY: process.env.API_KEY,
    },
  },
};
