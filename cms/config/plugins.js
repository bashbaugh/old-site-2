module.exports = ({ env }) => ({
  upload: {
    provider: 'google-cloud-storage',
    providerOptions: {
      serviceAccount: env.json('GCS_SERVICE_ACCOUNT_KEY'),
      bucketName: env('GCS_BUCKET_NAME'),
      basePath: env('GCS_BASE_PATH'),
      baseUrl: env('GCS_BASE_URL'),
      publicFiles: true,
      uniform: false,
    },
  },
});
