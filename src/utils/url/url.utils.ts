// eslint-disable-next-line import/prefer-default-export
export const getUrlFromObj = (data: any): string => {
  let url = "";
  Object.entries(data).forEach(([key, value]) => {
    const params = `${key}=${value}`;
    if (value) url += url.length ? `&${params}` : `?${params}`;
    else if (value === 0) url += url.length ? `&${params}` : `?${params}`;
  });
  return url.trim();
};
