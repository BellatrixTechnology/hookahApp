import React from 'react';
import {Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import {
  ParentView,
  BackgroundImage,
  SubView,
  TextView,
  ImageView,
} from './styles';
import backgroundImage from '../../../assets/images/backgroundImage.jpg';
import mail from '../../../assets/icons/mail.png';

const ForgotPassword = (props) => {
  return (
    <ParentView>
      <BackgroundImage source={backgroundImage}>
        <TextView>
          Confirm your email, we will send you the instructions to reset your
          password!
        </TextView>
        <View
          style={{
            backgroundColor: 'white',
            width: '80%',
            flexDirection: 'row',
          }}>
          <ImageView source={mail} />
          <TextInput
            placeholder="Enter your Email"
            onChangeText={(e) => setEmail(e)}
          />
        </View>
        <TouchableOpacity
          style={{
            width: '80%',
            backgroundColor: '#e56e0d',
            marginTop: 40,
            padding: 10,
            alignItems: 'center',
          }}
          onPress={() => props.navigation.navigate('LogIn')}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </BackgroundImage>
    </ParentView>
  );
};

export default ForgotPassword;
