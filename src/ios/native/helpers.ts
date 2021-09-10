import plist, { PlistObject } from "plist";
import { ChannelReader, ChannelWriter } from "../../types";

const iosReadKey = (contents: string, key: string): string =>
  ((plist.parse(contents) as PlistObject)[key] as string) || "";

/**
 * The Expo Release channel name
 * It reads the value from `Info.plist` and returns it as string.
 */
export const iosExpoChannelReader: ChannelReader = (contents) =>
  iosReadKey(contents, "EXUpdatesReleaseChannel");

const iosWriteKey = (contents: string, key: string, value: string): string =>
  plist.build({
    ...(plist.parse(contents) as PlistObject),
    [key]: value,
  });

/**
 * Update the Expo Release channel name
 * It replaces the value in the `Info.plist` contents and returns the new contents as string.
 */
export const iosExpoChannelWriter: ChannelWriter = (contents, version) =>
  iosWriteKey(contents, "EXUpdatesReleaseChannel", version);
