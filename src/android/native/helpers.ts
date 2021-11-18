const escapeRegex = (regex: string) => {
  return regex.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");
};

const expoReleaseChannelManifestName =
  "expo.modules.updates.EXPO_RELEASE_CHANNEL";
const expoRuntimeVersionManifestName =
  "expo.modules.updates.EXPO_RUNTIME_VERSION";

const androidApplicationMetadataRegex = (androidName: string) =>
  /**
   * AndroidManifest.xml regex for the Expo Release channel
   *
   * Warning: This has not been extensively tested with multiple manifest file types.
   * I wrote this to fit the manifest file for the app I was working on.
   */
  new RegExp(
    `(?<=<meta-data android:name="${escapeRegex(
      androidName
    )}" android:value=")(.*)(?="\\s*\/>)`,
    "gm"
  );

/**
 * Read a key of android/app/src/main/AndroidManifest.xml file in the `application/meta-data` section
 * @param content - The contents of the file
 * @param key - The `android:name=` key to look for
 * @returns - The value within `android:value=`
 */
const androidReadKey = (content: string, key: string) => {
  const regex = androidApplicationMetadataRegex(key);

  const value = content.match(regex);

  if (!value || value.length < 1 || !value[0]) {
    throw new Error(
      `Unable to find ${key} in application/meta-data tag. This may be caused by the regex being used. Please file a bug report if this is the case.`
    );
  }

  return value[0];
};

/**
 * Replace the contents of `android:value=`
 * @param content - The contents of the file
 * @param key - The `android:name=` key to look for
 * @param value - The new value to set
 * @returns - The contents, with the replaced value
 */
const androidWriteKey = (content: string, key: string, value: string) =>
  content.replace(androidApplicationMetadataRegex(key), value);

// Expo Release Channel
export const androidReadExpoReleaseChannel = (content: string) =>
  androidReadKey(content, expoReleaseChannelManifestName);

export const androidWriteExpoReleaseChannel = (
  content: string,
  value: string
) => androidWriteKey(content, expoReleaseChannelManifestName, value);

// Expo Runtime Version
export const androidReadExpoRuntimeVersion = (content: string) =>
  androidReadKey(content, expoRuntimeVersionManifestName);
export const andriodWriteExpoRuntimeVersion = (
  content: string,
  value: string
) => androidWriteKey(content, expoRuntimeVersionManifestName, value);
