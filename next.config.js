const withImages = require('next-images');

module.exports = withImages({
  esModule: true,
});

module.exports = {
  future: {
    webpack5: true,
  },
  images: {
    domains: ['github.com', 'avatars.githubusercontent.com'],
  },
};
