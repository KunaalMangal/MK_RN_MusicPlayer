<p align="center">
  <h1 align="center">MK_RN_MUSICPLAYER</h1>
  <p>MK_RN_MUSICPLAYER is the Cross-Platform Application. With this application you can play the music in your mobile phone. </p>
</p>

# Note :- 

## 1. Currently This Application Works only as mobile application.

## 2. Currently this app is tessted only for Android mobile devices. If you want to use this application for IOS Mobile devices you need to configure all that dependencies in IOS.

## 3. Currently I embbed this music file in this application, you can find them in [**src/assets/audio**] directory.

Not sure where to start?

1. Getting Started.
2. Library / Dependencies Lists that are used in this project.
3. Project Structure.
4. Features


# Getting Started

## Step 1: Start the Metro Server

First, you will need to start **Metro**, the JavaScript _bundler_ that ships _with_ React Native.

To start Metro, run the following command from the _root_ of this React Native project:

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Start your Application

Let Metro Bundler run in its _own_ terminal. Open a _new_ terminal from the _root_ of your React Native project. Run the following command to start your _Android_ or _iOS_ app:

### For Android

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

### For iOS

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

# Dependencies List for this projecct

## Dependencies
yarn add @react-native-masked-view/masked-view @react-navigation/bottom-tabs @react-navigation/drawer @react-navigation/material-bottom-tabs @react-navigation/material-top-tabs @react-navigation/native @react-navigation/native-stack @react-navigation/stack react-native-gesture-handler react-native-pager-view react-native-reanimated react-native-safe-area-context react-native-screens react-native-tab-view react-native-paper react-native-vector-icons react-native-svg react-native-linear-gradient @react-native-community/slider react-native-track-player

## Dev Dependencies
yarn add --dev @types/react-native-vector-icons babel-plugin-module-resolver react-native-svg-transformer


# Project Structure


# Features
1. ReactNative Navigation.
2. ReactNative SVG support.
3. ReactNative Vector Icon support.
4. Module Resolver for getting the right path of any particular directory.
5. Music Player Controls add(Play, Pause, Previous, Next).
6. Music Time Tracker.
7. Music Progress Bar.
