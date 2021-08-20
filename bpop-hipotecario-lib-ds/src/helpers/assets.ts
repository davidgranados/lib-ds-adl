export const getAssetsBaseUrl = (): string => process.env.AWS_STATIC_BASE_URL || "";

export const getGlobalImgBaseUrl = (): string =>
  getAssetsBaseUrl() + process.env.AWS_STATIC_GLOBAL_IMAGE_ENDPOINT || "";

export const getGlobalDataBaseUrl = (): string =>
  getAssetsBaseUrl() + process.env.AWS_STATIC_GLOBAL_DATA_ENDPOINT || "";

export const getGlobalImageUrl = (resource: string): string => {
  return getGlobalImgBaseUrl() + `/${resource}`;
};

export const getGlobalDataUrl = (resource: string): string => {
  return getGlobalDataBaseUrl() + `/${resource}`;
};
