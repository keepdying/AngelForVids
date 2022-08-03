import { PlatformIds } from "../constants";

// For series, SHOWID:TRACKID

export function createNetflixAgent() {
  if (window.netflix == undefined)
    throw new Error("Netflix object doesn't exist");

  const _videoPlayer = netflix.appContext.state.playerApp.getAPI().videoPlayer;
  const _player= _videoPlayer.getVideoPlayerBySessionId(
    videoPlayer.getAllPlayerSessionIds()[0]
  );

  return {
    play: () => {
      _player.play()
    },
    pause: () => { 
      _player.pause()
    },
    seekForward: (milliSeconds) => {
      const currentTime = _player.getCurrentTime();
      _player.seek(currentTime + milliSeconds);
    },
    seek: (milliSeconds) => {
      _player.seek(milliSeconds);
    },
    currentTime: () => {
      return _player.getCurrentTime();
    },
    showId: () => {
      const movieId = _player.getDiagnostics().getGroups()[1]['MovieId']; 
      const trackId = _player.getDiagnostics().getGroups()[1]['TrackingId']; 
      return `${movieId}:${trackId}`;
    },
    platformId: () => {
      return PlatformIds.NETFLIX;
    }
  }
}
