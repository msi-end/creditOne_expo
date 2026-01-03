import "dotenv/config";

export default {
  expo: {
    name: "creditOne",
    slug: "creditOne",
    scheme: "creditOne",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icons/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/images/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },

    assetBundlePatterns: ["**/*"],

    ios: {
      supportsTablet: false,
      bundleIdentifier: "com.creditOne.app",
    },

    android: {
      package: "com.creditOne.app",
      adaptiveIcon: {
        foregroundImage: "./assets/icons/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
    },

    web: {
      favicon: "./assets/icons/favicon.png",
    },

    plugins: [
      "expo-router",
      [
        "expo-build-properties",
        {
          android: {
            enableProguardInReleaseBuilds: true,
          },
        },
      ],
    ],

    experiments: {
      typedRoutes: true,
    },

    extra: {
      apiBaseUrl: process.env.API_BASE_URL,
      syncInterval: 30000,
      enableOffline: true,
      enableAnalytics: true,
    },
  },
};
