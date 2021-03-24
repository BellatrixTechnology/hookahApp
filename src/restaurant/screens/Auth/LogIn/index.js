import React, { useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ImageBackground,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import {
  AccountView,
  BackgroundImage,
  ImageView,
  LogInView,
  ParentView,
  SignUpText,
  SubView,
  TextInputView,
} from './styles';
import backgroundImage from '../../../assets/images/backgroundImage.jpg';
import mail from '../../../assets/icons/mail.png';
import passs from '../../../assets/icons/pass.png';
import Hukah from '../../../../assests/images/splash_logo.png';
import { registerUser } from '../../../../redux/user/actions';
import { connect } from 'react-redux';
import Restaurant from '../../../api/user';

const LogIn = (props) => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onsubmit = () => {
    if (!email || email.length < 6) {
      setErrorMessage('Invalid email.');
    } else if (!pass.length) {
      setErrorMessage('Invalid password.');
    } else {
      Restaurant.Login({ email, password: pass })
        .then((res) => res.data)
        .then((res) => res.data)
        .then((res) => {
          props.reduxUserRegister({
            type: 'restaurant',
            user: res.restaurant,
            authorization: res.restaurant._id,
          });
        })
        .catch((err) => {
          console.log({err})
          setErrorMessage(err.response.data.message);
        });
    }
  };
  return (
    <ParentView>
      <BackgroundImage source={backgroundImage}>
        <View style={{ flex: 1 }}>
          <Image
            source={Hukah}
            style={{
              width: '60%',
              height: 40,
              alignSelf: 'center',
              marginTop: 100,
            }}
          />
        </View>
        <SubView>
          <TextInputView>
            <ImageView source={mail} />
            <TextInput
              placeholder={'Enter your Email Here...'}
              vale={email}
              onChangeText={(e) => setEmail(e)}
            />
          </TextInputView>

          <TextInputView>
            <ImageView source={passs} />
            <TextInput
              placeholder={'Enter your Password Here...'}
              value={pass}
              onChangeText={(e) => setPass(e)}
            />
          </TextInputView>
          <TouchableOpacity
            style={{ alignSelf: 'flex-end', marginTop: 10 }}
            onPress={() => props.navigation.navigate('ForgotPassword')}
          >
            <Text style={{ color: 'white' }}>Forgot your Password?</Text>
          </TouchableOpacity>
          <Text style={{ color: 'red' }}>{errorMessage}</Text>

          <LogInView onPress={onsubmit}>
            <Text>LogIn</Text>
          </LogInView>
        </SubView>
        <AccountView>
          <Text style={{ color: 'white' }}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <SignUpText>SignUp</SignUpText>
          </TouchableOpacity>
        </AccountView>
      </BackgroundImage>
    </ParentView>
  );
};
const mapDispatchToProps = (dispatch) => {
  return { reduxUserRegister: (user) => dispatch(registerUser(user)) };
};

export default connect(null, mapDispatchToProps)(LogIn);
