const path = require('path');

// default strapi setup

// module.exports = ({ env }) => ({
//   connection: {
//     client: 'sqlite',
//     connection: {
//       filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
//     },
//     useNullAsDefault: true,
//   },
// });

  // updated setup for serverless-strapi with lambda ( note to self : fix later with shorter ${} ? :  in dirname )

const getDatabaseConfig = ({ env }) => {
  if (
    env("IS_OFFLINE", null) === "true" ||
    env("LAMBDA_RUNTIME_DIR", null) === null
  ) {
    // In local simulated Lambda or normal Strapi
    return {
      connection : {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '.tmp/data.db')),
        },
        useNullAsDefault: true,
      }
    };
  } else {
    // In Lambda on AWS
    return {
      connection : {
        client: 'sqlite',
        connection: {
          filename: path.join(__dirname, '..', env('DATABASE_FILENAME', '/tmp/data.db')),
        },
        useNullAsDefault: true,
      }
    };
  }
};

module.exports = ({ env }) => (
  getDatabaseConfig({ env })
);


 // old strapi export connection

// return {
//   connector: "bookshelf",
//   settings: {
//     client: "sqlite",
//     filename: env("DATABASE_FILENAME", "/tmp/data.db"),
//   },
//   options: {
//     useNullAsDefault: true,
//   },
// }

// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: getDatabaseConfig({ env }),
//   },
// });
