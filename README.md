# Standard Version Expo Bumpers

[Standard Version](https://github.com/conventional-changelog/standard-version#standard-version) [custom updaters](https://github.com/conventional-changelog/standard-version#custom-updaters) for Expo

```bash
$ npm install @torah-anytime/standard-version-expo-channel
```

## Update Expo Runtime Version

When using a bare Expo workflow, to use Expo Publish you need to make sure the published updates are only pushed to supported devices. Expo has an option to use [Runtime Versions](https://docs.expo.dev/distribution/runtime-versions/#configuration-for-the-bare-workflow). These bumpers keep the runtime version in sync with the app version so that only users on the current app binary will get the bundle updates.

Note from the Expo docs: Custom runtime versions are not supported on the classic build system (`expo build`); these apps will always use the SDK version as the basis for determining runtime compatibility.

WARNING: The Android Manifest (`android/app/src/main/AndroidManifest.xml`) must already contain `<meta-data android:name=“expo.modules.updates.EXPO_RUNTIME_VERSION” android:value=“<any value>"/>`. Otherwise it will throw an error.

```js
// .versionrc.js
module.exports = {
  bumpFiles: [
    // ...
    {
      filename: "ios/TorahAnyTime/Supporting/Expo.plist",
      updater: require("@torah-anytime/standard-version-expo-channel/dist/ios/native/runtime-version"),
    },
    {
      filename: "android/app/src/main/AndroidManifest.xml",
      updater: require("@torah-anytime/standard-version-expo-channel/dist/android/native/runtime-version"),
    },
  ],
};
```

## Update Expo Release Channel

When publishing using an Expo bare workflow with `expo build`, Expo does not make sure that updates are only pushed to devices which have the correct binary. This can cause old app versions which do not have the required native dependencies to receive new javascript bundle updates.

Expo recommends using [Release Channels](https://docs.expo.dev/bare/updating-your-app/#release-channels) to solve this. Whenever releasing a new binary, set the channel to match the version number. Any updates should be pushed to this channel.

WARNING: The Android Manifest (`android/app/src/main/AndroidManifest.xml`) must already contain `<meta-data android:name=“expo.modules.updates.EXPO_RELEASE_CHANNEL” android:value=“<any value>"/>`. Otherwise it will throw an error.

To automatically update the iOS and Android Expo release channel to match the app version install this package and add the bump files:

```js
// .versionrc.js
module.exports = {
  bumpFiles: [
    // ...
    {
      filename: "ios/<YourAppName>/Supporting/Expo.plist",
      updater: require("@torah-anytime/standard-version-expo-channel/dist/ios/native/release-channel"),
    },
    {
      filename: "android/app/src/main/AndroidManifest.xml",
      updater: require("@torah-anytime/standard-version-expo-channel/dist/android/native/release-channel"),
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
