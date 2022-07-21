module.exports = {
  async redirects() {
    return [
      {
        source: '/meet',
        destination: 'https://app.usemotion.com/meet/bnjmn/hello',
        permanent: false,
      },
    ]
  },
}
