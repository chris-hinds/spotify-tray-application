import * as Constants from "../contsants";

// Player Actions
const playerUpdate = data => ({
  type: Constants.ACTION_PLAYER_UPDATE,
  data
});

const playerTrackUpdate = data => ({
  type: Constants.ACTION_PLAYER_TRACK_UPDATE,
  data
});

const playerReducer = (playerState, action) => {
  const { data, type } = action;

  switch (type) {
    case Constants.ACTION_PLAYER_UPDATE:
      return { ...playerState, ...getPlayerState(data) };
    case Constants.ACTION_PLAYER_TRACK_UPDATE:
      return { ...playerState, ...data };
    default:
      return playerState;
  }
};

const getPlayerState = playerObject => {
  const { duration, position, track_window, context, paused } = playerObject;
  const { current_track, next_tracks } = track_window;

  return {
    duration,
    position,
    paused,
    currentTrack: getCurrentTrack(current_track),
    nextTracks: next_tracks.length >= 1 ? getNextTracks(next_tracks[0]) : null
  };
};

const getCurrentTrack = currentTrack => ({
  trackName: currentTrack.name,
  albumName: currentTrack.album.name,
  artistName: getArtistsNames(currentTrack.artists),
  albumArtwork: getAlbumArtwork(currentTrack.album.images)
});

const getNextTracks = nextTracks => ({
  trackName: nextTracks.name,
  albumName: nextTracks.album.name,
  artistName: getArtistsNames(nextTracks.artists),
  albumArtwork: getAlbumArtwork(nextTracks.album.images)
});

const getArtistsNames = artistsNames =>
  artistsNames.map(artist => artist.name).join(", ");

const getAlbumArtwork = images => {
  return images[0] ? images[0].url : Constants.ALBUM_ART_PLACEHOLDER;
};

export { playerReducer, playerUpdate, playerTrackUpdate };
