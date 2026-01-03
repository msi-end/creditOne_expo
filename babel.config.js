module.exports = function (api) {
  api.cache(true);

  return {
    presets: ["babel-preset-expo"],
    plugins: [
      "expo-router/babel",

      // Absolute imports (@/)
      [
        "module-resolver",
        {
          root: ["./"],
          alias: {
            "@": "./src",
            "@app": "./app",
            "@features": "./src/features",
            "@components": "./src/components",
            "@api": "./src/api",
            "@data": "./src/data",
            "@store": "./src/store",
            "@theme": "./src/theme",
            "@utils": "./src/utils",
            "@constants": "./src/constants",
            "@types": "./src/types",
          },
        },
      ],

      // Performance & animations
      "react-native-reanimated/plugin",
    ],
  };
};
