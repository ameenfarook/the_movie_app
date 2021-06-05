# React Native - The Movie App

The movie app is a movie browsing app that builds completely on [**React Native**](https://reactnative.dev/) and [**Expo**](https://expo.io).

## Screenshot

![screenshots of the movie app](/screenshot/movie_ui_design.png)

## Dependencies

- [React Navigation](https://reactnavigation.org/)
- [Axios](https://axios-http.com/)
- [Expo App Loading](https://docs.expo.io/versions/latest/sdk/app-loading/)
- [Expo Font](https://docs.expo.io/versions/latest/sdk/font/)
- [Expo Status Bar](https://docs.expo.io/versions/latest/sdk/status-bar/)

## Setup instructions

### 1. Clone Repository

```sh
# Clone the movie app
git clone https://github.com/ameenfarook/the_movie_app.git
```

### 2. Install all dependencies

```sh
# navigate to app directory
cd the_movie_app

npm install
```

### 3. Configuration

Add TMDB API-KEY inside package.json / projectConfig.apiKey

```sh
# add tmdb api-key here
"projectConfig": {
    "apiKey": "<put the api key from tmdb here>"
  }
```

### 4. Start the app

```sh
# using expo-cli
expo start

# using npm
npm start
```
