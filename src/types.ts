/**
 * This method is used to read the version from the provided file contents.
 * The return value is expected to be a semantic version string.
 */
export type Reader = (contents: string) => string | undefined;

/**
 * This method is used to write the version to the provided contents.
 * The return value will be written directly (overwrite) to the provided file.
 */
export type Writer = (contents: string, version: string) => string;
