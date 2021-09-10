import { iosExpoChannelReader, iosExpoChannelWriter } from "./helpers";

export const readVersion = (contents: string) => iosExpoChannelReader(contents);

export const writeVersion = (contents: string, version: string) =>
  iosExpoChannelWriter(contents, version);
