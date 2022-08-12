module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET','9dae2180c9541148cf0e219ccb1d4530'),
  },
});
