import * as Constants from "../contsants";

// Player Actions
const playerUpdate = data => ({
  type: Constants.ACTION_PLAYER_UPDATE,
  data
});

const playerReducer = (playerState, action) => {
  const { data, type } = action;

  switch (type) {
    case Constants.ACTION_PLAYER_UPDATE:
      return { ...playerState, ...getPlayerState(data) };
    default:
      return playerState;
  }
};

const getPlayerState = playerObject => {
  const { duration, position, track_window, context, paused } = playerObject;
  const { current_track } = track_window;

  return {
    duration,
    position,
    paused,
    currentTrack: getCurrentTrack(current_track)
  };
};

const getCurrentTrack = currentTrack => ({
  trackName: currentTrack.name,
  albumName: currentTrack.album.name,
  artistName: getArtistsNames(currentTrack.artists),
  albumArtwork: getAlbumArtwork(currentTrack.album.images)
});

const getArtistsNames = artistsNames =>
  artistsNames.map(artist => artist.name).join(", ");

const getAlbumArtwork = images => {
  return images[0] ? images[0].url : Constants.ALBUM_ART_PLACEHOLDER;
};

export { playerReducer, playerUpdate };
