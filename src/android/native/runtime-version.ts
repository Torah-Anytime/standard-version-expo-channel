import {
  andriodWriteExpoRuntimeVersion,
  androidReadExpoRuntimeVersion,
} from "./helpers";

export const readVersion = (content: string) =>
  androidReadExpoRuntimeVersion(content);

export const writeVersion = (content: string, version: string) =>
  andriodWriteExpoRuntimeVersion(content, version);
