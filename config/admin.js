module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '58c29c9200c2d69b002d0d65f8283dc5'),
  },
});
