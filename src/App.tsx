import React, {useEffect, useState} from 'react';
import {PaperProvider} from 'react-native-paper';

import AppNavigations from '@app/routes/navigators';
import {
  addTrack,
  setupAudioPalyer,
} from '@app/services/playbackServices/PlaybackService';

const App = () => {

  async function initializeAudioPlayer() {
    let isSetup = await setupAudioPalyer();

    if (isSetup) {
      await addTrack();
    }
  }

  useEffect(() => {
    initializeAudioPlayer();
  }, []);

  return (
    <PaperProvider>
      <AppNavigations />
    </PaperProvider>
  );
};

export default App;
