import 'react-native-gesture-handler';
import TrackPlayer from 'react-native-track-player';
import {AppRegistry} from 'react-native';

import App from './src/App';
import {name as appName} from './app.json';
import {PlaybackService} from './src/services/playbackServices/PlaybackService'

AppRegistry.registerComponent(appName, () => App);
TrackPlayer.registerPlaybackService(() => PlaybackService);