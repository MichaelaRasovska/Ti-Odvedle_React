const TOKEN =
  'pk.eyJ1IjoidGlvZHZlZGxlIiwiYSI6ImNraHV2NWw3bjBvaHMycnA1aDJvenY3YjYifQ.84cTo_cZbhjqOJ7r-BveXw';
export const getCoordinates = async (street, city) => {
  const response = await fetch(
    `https://api.mapbox.com/geocoding/v5/mapbox.places/${street},${city}.json?access_token=${TOKEN}`,
  );
  const data = await response.json()

  if (data.features[0]) {
    return data.features[0].geometry.coordinates;
  }
  return null;
}
