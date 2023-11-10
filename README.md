# Product List - React Native Application

Simple React Native application with list of products fetched from sample API!

## Table of Contents

- [Getting Started](#getting-started)
  - [Download and Setup](#download-and-setup)
  - [Run the application](#run-the-application)
- [Core Components](#core-components)
  - [react-navigation](#react-navigation)
  - [react-redux & reduxjs/toolkit](#react-redux-&-reduxjs/toolkit)
  - [react-native-elements](#react-native-elements)
  - [axios](#axios)
  - [react-native-format-currency](#react-native-format-currency)
- [Demo](#demo)
  - [Android](#android)
  - [iOS](#ios)

## Getting Started

This code will run using Expo without rebuilding on Android or IOS

### Download and Setup:

Download or clone the project.

```
git clone git@github.com:jayan2019/ProductList.git
```

You can use git to clone the project or can download the project as [zip](https://github.com/jayan2019/ProductList/archive/refs/heads/main.zip).

```bash
# using npm
npm install

# OR using Yarn
yarn
```

Install dependencies, you can use [npm](http://npmjs.com) or [yarn](https://yarnpkg.com) to install node modules.

### Run the application:

Open project in react native compatible IDE

Copy the `.env.example` file and create a `.env` file in root folder.
Change `REACT_NATIVE_API_URL` with this [Demo API URL](https://654cfbeb77200d6ba859d03c.mockapi.io/api/v1)

Some basic commands to use in Command Prompt or Terminal

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

Starts the Metro.

```bash
# using npm
npm run ios

# OR using Yarn
yarn ios
```

Starts the development server and loads ProductList app in an iOS simulator. (Mac only, requires Xcode)

```bash
# using npm
npm run android

# OR using Yarn
yarn android
```

Starts the development server and loads ProductList app on a connected Android device or emulator. (Requires Android build tools)

```bash
# using npm
npm run test

# OR using Yarn
yarn test
```

Starts the test with covarage

## Core Components

For the purpose of achieving and conducting experiments, the following components are used in this project.

#### `react-navigation`

This component is used for navigating between screens when the user taps on a product item. It also handles the app header and facilitates back navigation. [Documentation](https://reactnavigation.org/docs/getting-started)

#### `react-redux & reduxjs/toolkit`

These components are employed to save selected products and display them in the product details screen. They are utilized for experimental purposes, as we can achieve the same solution using various methods, including navigation pros. [Documentation](https://redux-toolkit.js.org/introduction/getting-started)

#### `react-native-elements (@rneui)`

This simple UI kit is used to simplify styling and enhance the overall look and feel. This is also utilized for experimental purposes, as we can use React Native own components or explore numerous excellent UI components available. [Documentation](https://reactnativeelements.com/docs)

#### `axios`

This promise-based HTTP client is used to simplify API requests. [Documentation](https://github.com/axios/axios)

#### `react-native-format-currency`

This lightweight international currency formatter is used to format numbers into the correct currency format. [Documentation](https://github.com/AwesomeLabs/react-native-format-currency)

### Demo

#### `Android`

[YouTube - Product List App Demo - Android](https://youtube.com/shorts/2SWrED2UP5E?feature=share)

#### `iOS`

[YouTube - Product List App Demo - iOS](https://youtube.com/shorts/SqbkkCDxzDA?feature=share)
