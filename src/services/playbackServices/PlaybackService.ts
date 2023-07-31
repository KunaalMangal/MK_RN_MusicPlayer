import TrackPlayer, {Event, RepeatMode} from 'react-native-track-player';

import {audioPlayLists} from '@app/utils/constants/audioPlaylists';

// Settingup AudioPlayer
export async function setupAudioPalyer() {
  let isSetup = false;
  try {
    await TrackPlayer.getCurrentTrack();
    isSetup = true;
  } catch (error) {
    await TrackPlayer.setupPlayer();
    isSetup = true;
  } finally {
    return isSetup;
  }
}

// Add AudioTracks from Playlists
export async function addTrack() {
  await TrackPlayer.add(audioPlayLists);
  await TrackPlayer.setRepeatMode(RepeatMode.Queue);
}

// exporting track playback services
export const PlaybackService = async function () {
  // Current Track Play
  TrackPlayer.addEventListener(Event.RemotePlay, () => TrackPlayer.play());

  // Current Track Pause
  TrackPlayer.addEventListener(Event.RemotePause, () => TrackPlayer.pause());

  //   Previous Track / Audio
  TrackPlayer.addEventListener(Event.RemotePrevious, () =>
    TrackPlayer.skipToPrevious(),
  );

  //   Next Track/ audio
  TrackPlayer.addEventListener(Event.RemoteNext, () =>
    TrackPlayer.skipToNext(),
  );
};
