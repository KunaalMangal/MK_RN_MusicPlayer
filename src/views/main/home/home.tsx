import React, {useEffect, useState} from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  FlatList,
  Pressable,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Fontawesome from 'react-native-vector-icons/FontAwesome5';

import {CustomButton, CustomHeader} from '@app/components/';
import {routes} from '@app/routes/routes';
import TrackPlayer, {
  Event,
  State,
  Track,
  usePlaybackState,
  useProgress,
  useTrackPlayerEvents,
} from 'react-native-track-player';
import Slider from '@react-native-community/slider';
import {
  addTrack,
  setupAudioPalyer,
} from '@app/services/playbackServices/PlaybackService';

const {height, width} = Dimensions.get('window');

const data = [
  {
    id: 1,
    title: 'Mind',
    tagLine: "Let's train it",
    icon: 'brain',
  },
  {
    id: 2,
    title: 'Sleep',
    tagLine: 'Restful sleep',
    icon: 'moon',
  },
  {
    id: 3,
    title: 'Relax',
    tagLine: 'Reframe stress',
    icon: 'om',
  },
  {
    id: 4,
    title: 'Focus',
    tagLine: 'Focus on Work',
    icon: 'bullseye',
  },
];

const trackEvents = [
  Event.PlaybackState,
  Event.PlaybackError,
  Event.PlaybackMetadataReceived,
  Event.PlaybackProgressUpdated,
  Event.PlaybackQueueEnded,
  Event.PlaybackTrackChanged,
];

const HOME = (props: any) => {
  const [audioTrack, setAudioTrack] = useState<Track | null>();
  const playBackState = usePlaybackState();
  const {position, duration} = useProgress();

  // Play / Pause Button
  const togglePlayback = async (playback: State) => {
    const currentTrack = await TrackPlayer.getCurrentTrack();

    if (currentTrack !== null) {
      if (playback === State.Paused || playback === State.Ready) {
        await TrackPlayer.play();
      } else {
        await TrackPlayer.pause();
      }
    }
  };

  // tracking the audio player events
  useTrackPlayerEvents(trackEvents, async event => {
    switch (event.type) {
      case Event.PlaybackError:
        console.log('An error occured while playing the current track.',event);
        break;
      case Event.PlaybackState:
        console.log('PlaybackState Event.',event);
        break;
      case Event.PlaybackTrackChanged:
        console.log('PlaybackTrackChanged Event.',event);
        const playingTrack = await TrackPlayer.getTrack(event.nextTrack);
        console.log('playingTrack', playingTrack);
        setAudioTrack(playingTrack);
        break;
        case Event.PlaybackMetadataReceived:
        console.log('PlaybackTrackChanged Event.',event);
        break;
    }
  });


  return (
    <LinearGradient
      colors={['#eacee5', '#eff0ff']}
      style={styles.gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.container}>
        <CustomHeader
          headerLeft={() => console.log('header Left')}
          headerRight={() => console.log('header right')}
          headerCenter="My name is Kunaal"
        />
        <View style={styles.contentContainer}>
          <View style={styles.contentContainerTop}>
            <Text style={styles.contentContainerTopTitle}>
              What's your mood today?
            </Text>
          </View>
          <View style={styles.contentContainerMiddle}>
            <View style={{width: '50%'}}>
              <Text style={styles.contentContainerMiddleLeftText}>
                Latest Practices
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: '50%',
                alignItems: 'flex-end',
              }}
              onPress={() => console.log('View All')}>
              <Text style={styles.contentContainerMiddleRightText}>
                View all
              </Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            numColumns={2}
            scrollEnabled={true}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              width: width,
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            renderItem={({item, index}) => {
              return (
                <View key={index} style={styles.cardView}>
                  <View style={styles.cardIconContainer}>
                    <Fontawesome name={item?.icon} size={25} color="#f55280" />
                  </View>
                  <View style={styles.cardTextContainer}>
                    <Text style={styles.cardViewTitle}>{item?.title}</Text>
                    <Text style={styles.cardViewTagLine}>{item?.tagLine}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        <TouchableOpacity
          style={styles.bottomContentContainer}
          onPress={() => props?.navigation?.navigate(routes.MUSIC_SCREEN)}>
          <View style={styles.bottomContentContainerLeft}>
            <Text style={styles.continueText}>Continue</Text>
            <View style={{paddingVertical: 10}}>
              <Text style={styles.trackTitle}>{audioTrack?.title}</Text>
              <View style={styles.trackProgressContainer}>
                <View style={styles.trackDuration}>
                  <Text style={styles.trackMinDuration}>
                    {new Date(position * 1000).toISOString().substring(15, 19)}
                  </Text>
                  <Text style={styles.trackMaxDuration}>
                    {new Date((duration - position) * 1000)
                      .toISOString()
                      .substring(15, 19)}
                  </Text>
                </View>
                <View style={styles.trackProgress}>
                  <Slider
                    value={position}
                    minimumValue={0}
                    maximumValue={duration}
                    thumbTintColor="#cecece"
                    minimumTrackTintColor="#f55280"
                    maximumTrackTintColor="#cecece"
                    style={{width: '100%'}}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.bottomContentContainerRight}>
            <Pressable
              style={styles.playBtnContainer}
              onPress={() => togglePlayback(playBackState)}>
              <Fontawesome
                name={playBackState === State.Playing ? 'pause' : 'play'}
                size={32}
                color="#ffffff"
              />
            </Pressable>
          </View>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    height: height,
    width: width,
  },
  container: {
    flex: 1,
    height: height,
    width: width,
    alignItems: 'center',
  },
  contentContainer: {
    height: '70%',
    width: width,
    flexDirection: 'column',
    alignItems: 'center',
  },
  contentContainerTop: {
    width: '100%',
    padding: 15,
  },
  contentContainerTopTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: 'grey',
  },
  contentContainerMiddle: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  contentContainerMiddleLeftText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
  },
  contentContainerMiddleRightText: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    borderBottomWidth: 2,
    borderColor: '#f55280',
  },
  cardView: {
    width: 180,
    height: 180,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    margin: 15,
    padding: 15,
    elevation: 5,
  },
  cardIconContainer: {
    width: '100%',
    height: '60%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  cardTextContainer: {},
  cardViewTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    paddingVertical: 5,
  },
  cardViewTagLine: {
    fontSize: 16,
    fontWeight: '500',
    color: 'grey',
  },
  bottomContentContainer: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '18%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  bottomContentContainerLeft: {
    width: '70%',
    justifyContent: 'space-between',
  },
  continueText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#c7c7c7',
  },
  trackTitle: {
    fontSize: 24,
    fontWeight: '800',
    color: '#000000',
  },
  trackProgressContainer: {
    width: '100%',
    paddingVertical: 5,
  },
  trackDuration: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  trackMinDuration: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
  },
  trackMaxDuration: {
    color: '#cecece',
    fontSize: 16,
    fontWeight: '500',
  },
  trackProgress: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContentContainerRight: {
    width: '25%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  playBtnContainer: {
    width: 64,
    height: 64,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: '#f55280',
  },
});

export default HOME;
