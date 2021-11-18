import { expoRuntimeVersionReader, expoRuntimeVersionWriter } from "./helpers";

export const readVersion = (contents: string) =>
  expoRuntimeVersionReader(contents);

export const writeVersion = (contents: string, version: string) =>
  expoRuntimeVersionWriter(contents, version);
