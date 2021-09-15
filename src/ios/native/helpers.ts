import plist, { PlistObject } from "plist";
import { Reader, Writer } from "../../types";

/**
 * It reads the value from `Info.plist` and returns it as string.
 */
const iosReadKey = (contents: string, key: string): string =>
  ((plist.parse(contents) as PlistObject)[key] as string) || "";

/**
 * It replaces the value in the `Info.plist` contents and returns the new contents as string.
 */
const iosWriteKey = (contents: string, key: string, value: string): string =>
  plist.build({
    ...(plist.parse(contents) as PlistObject),
    [key]: value,
  });

// Expo Channel
export const iosExpoChannelReader: Reader = (contents) =>
  iosReadKey(contents, "EXUpdatesReleaseChannel");

export const iosExpoChannelWriter: Writer = (contents, version) =>
  iosWriteKey(contents, "EXUpdatesReleaseChannel", version);

// Expo Runtime Version
export const iosExpoRuntimeVersionWriter: Writer = (contents, version) =>
  iosWriteKey(contents, "EXUpdatesRuntimeVersion", version);

export const iosExpoRuntimeVersionReader: Reader = (contents) =>
  iosReadKey(contents, "EXUpdatesRuntimeVersion");
