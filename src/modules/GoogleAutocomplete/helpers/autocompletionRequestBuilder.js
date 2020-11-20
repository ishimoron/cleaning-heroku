export default (autocompletionRequest) => {
  const res = { ...autocompletionRequest };

  if (autocompletionRequest.bounds) {
    res.bounds = new window.google.maps.LatLngBounds(...autocompletionRequest.bounds);
  }

  if (autocompletionRequest.location) {
    res.location = new window.google.maps.LatLng(autocompletionRequest.location);
  }

  return res;
};
