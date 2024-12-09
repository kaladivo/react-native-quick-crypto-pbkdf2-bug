This repo serves as a example of a bug with pbkdf2 function in react-native-quick-crypto.

## How to run

1. Clone this repo
2. run `npm install`
3. run `npx expo prebuild --clean`
4. run `npx expo run:ios --configuration Release -d` - Make sure to run the app on physical device in release mode (without dev server).
5. Press on start button. The app will start calculating pbkdf2 5 000 times. It usually hangs around 50-100. There is no exception thrown.

I was able to replicate this bug on iPhone 16 pro ios 18.1.1 (iOS latest to date) and on iPhone 14 (iOS 18.0.1). I was unable to replicate it on Android.
