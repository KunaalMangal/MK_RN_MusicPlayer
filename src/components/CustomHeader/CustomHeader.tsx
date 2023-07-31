import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Fontawesome from 'react-native-vector-icons/FontAwesome';

const CustomHeader = (props: any) => {
  return (
    <View style={styles.headerContainer}>
      {props?.headerLeft && (
        <TouchableOpacity style={styles.headerLeft} onPress={props?.headerLeft}>
          <Image
            source={require('@app/assets/images/avatars/man.png')}
            style={{
              width: 52,
              height: 52,
              resizeMode: 'contain',
            }}
          />
        </TouchableOpacity>
      )}
      {props?.headerCenter && (
        <View style={styles.headerCenter}>
          <Text style={{color: '#7f7180', fontSize: 20, fontWeight: '600'}}>
            {props?.headerCenter}
          </Text>
        </View>
      )}
      {props?.headerRight && (
        <TouchableOpacity
          style={styles.headerRight}
          onPress={props?.headerRight}>
          <Fontawesome name="navicon" size={25} color="#f55280" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: '100%',
    height: '12%',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  headerLeft: {
    height: '100%',
    width: '20%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  headerCenter: {
    height: '100%',
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  headerRight: {
    width: '20%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default CustomHeader;
