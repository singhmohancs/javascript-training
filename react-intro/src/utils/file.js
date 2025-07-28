export const getFileExtension = (filename) => {
  return filename.split(".").pop();
};

export const getFileSize = (size) => {
  return size / 1024 / 1024;
};