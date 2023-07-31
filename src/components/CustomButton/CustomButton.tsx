import {AppColors} from '@app/theme/Colors/Colors';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const CustomButton = (props: any) => {
  return (
    <TouchableOpacity onPress={props?.onPress} style={styles.btnContainer}>
      {props?.leftIcon ? (
        <View>
          <Text
            style={{
              width: 25,
              height: 25,
              backgroundColor: 'grey',
            }}></Text>
        </View>
      ) : null}
      <Text
        style={
          props?.leftIcon || props?.rightIcon
            ? {
                width: '80%',
                height: 25,
                padding: 5,
                textAlign: 'center',
                color: '#000000',
              }
            : {
                width: '100%',
                height: 25,
                textAlign: 'center',
                color: '#000000',
              }
        }>
        {props?.text}
      </Text>
      {props?.rightIcon ? (
        <View>
          <Text
            style={{
              width: 25,
              height: 25,
              backgroundColor: 'grey',
            }}></Text>
        </View>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderWidth: 0.5,
    borderColor: 'lightgrey',
    borderRadius: 10,
    height: '100%',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
  },
});

export default CustomButton;
