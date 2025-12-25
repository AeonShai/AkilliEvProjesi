# AkilliEvApp

Smart home demo app (React Native) controlling a light device using a local mock API (json-server).

## Prerequisites
- Node.js 18+
- Android Studio (for emulator) or Xcode (macOS, for iOS)
- Java JDK for React Native Android build

## Install Dependencies

```bash
npm install
```

## Start Mock API

Runs a local API on port 3000 using `db.json`.

```bash
npm run server
```

- Android emulator connects via `http://10.0.2.2:3000`
- iOS simulator / web connects via `http://localhost:3000`

## Run the App

Start the Metro bundler:

```bash
npm start
```

In another terminal, run on Android:

```bash
npm run android
```

Or on iOS (macOS only):

```bash
npm run ios
```

## Project Structure
- `App.js`: Root component
- `index.js`: RN entrypoint
- `src/api/apiClient.js`: Axios instance (platform-aware base URL)
- `src/hooks/useLightControl.js`: Data fetching + update logic
- `src/screens/HomeScreen.js`: UI for light controls
- `db.json`: Mock data served by json-server

## Notes
- Brightness is clamped between 0 and 100.
- If network calls fail, an error message is displayed.
- Ensure the mock API is running before opening the app.
