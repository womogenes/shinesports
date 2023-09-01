// Geocode addresses using the Nominatim API

const cache = new Map();

export const geocode = async (query) => {
  if (cache.has(query)) return cache.get(query);

  const res = (
    await (
      await fetch(
        `https://nominatim.openstreetmap.org/search?q=${query}&format=json`,
      )
    ).json()
  )[0];
  cache.set(query, res);

  return await res;
};
