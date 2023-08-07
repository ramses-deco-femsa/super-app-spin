module.exports = function (api) {
  api.cache(true)

  return {
    presets: ['module:metro-react-native-babel-preset'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        "module-resolver",
        {
          alias: {
            '@sas': "./src",
            '@super-app-theme': "./src/ui",
          },
        },
      ],
    ],
  }
}
