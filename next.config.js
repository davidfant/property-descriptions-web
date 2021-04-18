
module.exports = {
  // https://tilomitra.com/using-environment-variables-on-the-front-end-with-nextjs
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
  },
};
