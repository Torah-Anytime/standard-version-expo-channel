/**
 * AndroidManifest.xml regex for the Expo Release channel
 *
 * Warning: This has not been extensively tested with multiple manifest file types.
 * I wrote this to fit the manifest file for the app I was working on.
 */
const expoReleaseChannelRegex =
  /(?<=<meta-data android:name="expo\.modules\.updates\.EXPO_RELEASE_CHANNEL" android:value=")(.*)(?=" \/>)/gm;

export const androidReadExpoReleaseChannel = (content: string) => {
  const value = content.match(expoReleaseChannelRegex);

  if (!value || value.length < 1 || !value[0]) {
    throw new Error(
      "Unable to find expo.modules.updates.EXPO_RELEASE_CHANNEL in application/meta-data tag. This may be caused by the regex being used. Please file a bug report if this is the case."
    );
  }

  return value[0];
};

export const androidWriteExpoReleaseChannel = (
  content: string,
  value: string
) => content.replace(expoReleaseChannelRegex, value);
