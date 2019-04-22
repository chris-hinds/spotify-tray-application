import * as Constants from "../contsants";
// Player Controls
export const playerNextTrack = async token => {
  console.log(token);
  return fetch(`${Constants.SPOTIFY_PLAYER_ENDPOINT}/next`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });
};

export const playerPrevTrack = async token => {
  return fetch(`${Constants.SPOTIFY_PLAYER_ENDPOINT}/previous`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "POST"
  });
};

export const playerPause = async token => {
  return fetch(`${Constants.SPOTIFY_PLAYER_ENDPOINT}/pause`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
};

export const playerPlay = async token => {
  return fetch(`${Constants.SPOTIFY_PLAYER_ENDPOINT}/play`, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    method: "PUT"
  });
};
