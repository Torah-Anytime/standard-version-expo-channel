import {
  iosExpoRuntimeVersionReader,
  iosExpoRuntimeVersionWriter,
} from "./helpers";

export const readVersion = (contents: string) =>
  iosExpoRuntimeVersionReader(contents);

export const writeVersion = (contents: string, version: string) =>
  iosExpoRuntimeVersionWriter(contents, version);
