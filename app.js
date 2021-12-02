const startStrapi = require('@strapi/strapi/lib/Strapi');

const serverless = require('serverless-http');

module.exports.handler = async (event, context) => {
  if (!global.strapi) {
    console.log('Cold starting Strapi');
    await startStrapi({ dir: __dirname }).start();
  }
  const handler = serverless(global.strapi.app);
  return handler(event, context);
};

// const startStrapi = require("strapi/lib/Strapi");
//
// const serverless = require("serverless-http");
//
// const strapiInstance = startStrapi();
//
// let strapiStartPromise = null;
//
// module.exports.handler = async (event, context) => {
//   if (strapiStartPromise === null) {
//     strapiStartPromise = strapiInstance.start();
//   }
//   await strapiStartPromise;
//   const handler = serverless(strapiInstance.app);
//   return handler(event, context);
// };
