module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 3000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '9151d12a43db9632a1bb1f1e23704a98'),
    },
  },
});
