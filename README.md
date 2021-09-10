# Standard Version Expo Release Channel

[Standard Version](https://github.com/conventional-changelog/standard-version#standard-version) [custom updaters](https://github.com/conventional-changelog/standard-version#custom-updaters) for Expo

## Update Expo Release Channel

When publishing using an Expo bare workflow, Expo does not make sure that updates are only pushed to devices which have the correct binary. This can cause old app versions which do not have the required native dependencies to receive new javascript bundle updates.

Expo recommends using [Release Channels](https://docs.expo.dev/bare/updating-your-app/#release-channels) to solve this. Whenever releasing a new binary, set the channel to match the version number. Any updates should be pushed to this channel.

To automatically update the iOS and Android Expo release channel to match the app version install this package and add the bump files:

```bash
$ npm install @torah-anytime/standard-version-expo-channel
```

```js
// .versionrc.js
module.exports = {
  bumpFiles: [
    // ...
    {
      filename: "ios/<YourAppName>/Supporting/Expo.plist",
      updater: require("@torah-anytime/standard-version-expo-channel/build/ios/native/release-channel"),
    },
    {
      filename: "android/app/src/main/AndroidManifest.xml",
      updater: require("@torah-anytime/standard-version-expo-channel/build/android/native/release-channel"),
    },
  ],
};
```

To test if your configuration works as expected, you can run standard version in dry mode. This shows you what will happen, without actually applying the versions and tags.

```bash
$ npx standard-version --dry-run
```

### Credit

Inspired by: https://github.com/brettdh/standard-version-expo
