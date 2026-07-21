export default {
  input: 'hey-api/backend', // sign up at app.heyapi.dev
  output: 'vendor/openapi-ts/',
  plugins: [
    // ...other plugins
    'zod',
    {
      name: '@hey-api/sdk',
      validator: true,
    },
  ],
};
