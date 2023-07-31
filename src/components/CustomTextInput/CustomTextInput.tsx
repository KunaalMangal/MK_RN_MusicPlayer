import {AppColors} from '@app/theme/Colors/Colors';
import {AppStyle} from '@app/theme/Styles/AppStyle';
import React from 'react';
import {Text, TextInput, View} from 'react-native';

const CustomTextInput = (props: any) => {
  return (
    <View style={{width: '100%', marginBottom: 15}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          backgroundColor: AppColors.Primary,
          borderWidth: 1,
          borderColor: AppColors.PrimaryDark,
          height: 50,
        }}>
        {props?.leftIcon && (
          <Text
            style={{
              width: 25,
              height: 25,
              backgroundColor: AppColors.PrimaryDark,
            }}></Text>
        )}
        <TextInput
          placeholder={props?.placeholder}
          style={
            props?.leftIcon || props?.rightIcon
              ? {
                  width: '80%',
                  height: 25,
                  // backgroundColor: 'green',
                  padding: 5,
                }
              : {
                  width: '100%',
                  height: 25,
                  // backgroundColor: 'green',
                  padding: 5,
                }
          }
          value={props?.userID}
          onChangeText={props?.setUserID}
          keyboardType={props?.keyboardType}
          secureTextEntry={props?.secureTextEntry}
        />
        {props?.rightIcon && (
          <Text
            style={{
              width: 25,
              height: 25,
              backgroundColor: AppColors.PrimaryDark,
            }}></Text>
        )}
      </View>
      {props?.errorMsg && (
        <View style={{margin: 5}}>
          <Text style={[AppStyle.fsDark, {fontSize: 12, fontWeight: 'bold'}]}>
            Error: {props?.errorMsg}
          </Text>
        </View>
      )}
    </View>
  );
};

export default CustomTextInput;
