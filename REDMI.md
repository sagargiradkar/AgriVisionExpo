Creating a first build for android

1] Install the latest EAS CLI : npm install -g expo-cli
2] Log in to your Expo account : eas login
3] Configure the project : eas build:configure
4] Create apk : eas build --platform android --profile preview
5] Run a build aab file : eas build --platform android


    in local machine 
    npx react-native build-android --mode=release
    cd android \android> ./gradlew clean
    ./gradlew assembleRelease

