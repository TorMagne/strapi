module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '13c534e1e7992efad3bc10de781547df'),
  },
});
