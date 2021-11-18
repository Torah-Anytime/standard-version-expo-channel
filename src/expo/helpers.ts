import { Reader, Writer } from "../types";
import { parse, serialize } from "./expo";

export const expoRuntimeVersionReader: Reader = (contents) => {
  const runtimeVersion = parse(contents).expo.runtimeVersion;

  // We only support a runtime version with a string value.
  if (!(typeof runtimeVersion === "string") && runtimeVersion !== undefined) {
    throw new Error("Only string values are supported for `runtimeVersion`");
  }

  return runtimeVersion;
};

export const expoRuntimeVersionWriter: Writer = (contents, version) => {
  const parsed = parse(contents);

  parsed.expo.runtimeVersion = version;

  return serialize(parsed, contents);
};
