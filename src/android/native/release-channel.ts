import {
  androidReadExpoReleaseChannel,
  androidWriteExpoReleaseChannel,
} from "./helpers";

export const readVersion = (content: string) =>
  androidReadExpoReleaseChannel(content);

export const writeVersion = (content: string, version: string) =>
  androidWriteExpoReleaseChannel(content, version);
