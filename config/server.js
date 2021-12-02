  // default strapi server config

// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
// });


  // serverless strapi server config

module.exports = ({ env }) => {
  let url = "https://kuv4305kra.execute-api.us-west-2.amazonaws.com/dev/"; //set after first deploy then deploy again or use default domain

  // Check if running in serverless-offline
  if (env("IS_OFFLINE", null) === "true") {
    url = "http://localhost:3000/dev";
  }

  return {
    host: env("HOST", "0.0.0.0"),
    port: env.int("PORT", 1337),
    url,
    admin: {
      serveAdminPanel: false, // No admin panel, trimed seperatly
      autoOpen: false,
      url: "/",
      auth: {
        secret: env(
          "ADMIN_JWT_SECRET"
        ),
      },
    },
  };
};
