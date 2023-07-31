import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {CustomButton} from '@app/components/';
import {routes} from '@app/routes/routes';
import Welcome from '@app/assets/images/backgrounds/meditation_girl.svg';

const {height, width} = Dimensions.get('window');

const WELCOME = (props: any) => {

  return (
    <LinearGradient
    colors={['#eacee5', '#eff0ff']}
    style={styles.gradient}
      start={{x: 0, y: 0}}
      end={{x: 1, y: 1}}>
      <SafeAreaView style={styles.container}>
        <View style={styles.welcomeContainer}>
          <View style={styles.welcomeImageContainer}>
            <Welcome width="100%" height="100%" />
          </View>
          <View style={styles.welcomeTextContainer}>
            <Text style={styles.welcomeTitle}>Time to meditate</Text>
            <Text style={styles.welcomeTagLine}>
              Take a breath, and ease your mind
            </Text>
          </View>
        </View>

        <View style={styles.bottomContainer}>
          <CustomButton
            text="Let's get Started"
            onPress={() => props?.navigation?.navigate(routes.HOME_SCREEN)}
          />
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 25,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  welcomeContainer: {
    height: height * 0.7,
    width: width * 0.9,
    alignItems: 'center',
  },
  welcomeImageContainer: {
    width: '100%',
    height: '70%',
  },
  welcomeTextContainer: {
    width: '100%',
    height: '30%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  welcomeTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000',
  },
  welcomeTagLine: {
    width: width * 0.4,
    fontSize: 18,
    color: 'grey',
    textAlign: 'center',
  },
  bottomContainer: {
    width: '100%',
    height: '15%',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default WELCOME;
