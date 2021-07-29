// Problem 2.
//
// For files within this same project, auto-import references relative path and
// not the expected remapped entries in `tsconfig.base.json`, which should be "@api/folder/file".
export { exportFromApi } from "./folder/file";
