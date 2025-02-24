export function parsePersistedData(data) {
  const parsedData = {};
  for (const key in data) {
    if (Object.prototype.hasOwnProperty.call(data, key)) {
      try {
        parsedData[key] = JSON.parse(data[key]);
      } catch (err) {
        parsedData[key] = data[key];
      }
    }
  }

  return parsedData;
}
export function getAuth() {
  const auth = localStorage.getItem("auth_st") || "{}";
  const parsedData = parsePersistedData(JSON.parse(auth));
  return parsedData?.state;
}
