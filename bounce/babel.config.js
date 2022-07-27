module.exports = function(api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      // Make sure Reanimated is listed last
      'react-native-reanimated/plugin',
    ],
  };
};
