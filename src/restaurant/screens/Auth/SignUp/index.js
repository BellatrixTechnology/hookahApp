import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {
  BackgroundImage,
  ImageView,
  ParentView,
  SignUpView,
  SubView,
  TextInputView,
  AccountView,
} from './styles';
import backgroundImage from '../../../assets/images/backgroundImage.jpg';
import mail from '../../../assets/icons/mail.png';
import passs from '../../../assets/icons/pass.png';
import Hukah from '../../../../assests/images/splash_logo.png';
import brands from '../../../assets/icons/brand.png';
import { connect } from 'react-redux';
import { registerUser } from '../../../../redux/user/actions';
import Restaurant from '../../../api/user';
const SignUp = (props) => {
  const [email, setEmail] = useState('');
  const [brand, setBrand] = useState('');
  const [pass, setPass] = useState('');
  const [rePass, setRePass] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const onsubmit = () => {
    if (!email || email.length < 6) {
      setErrorMessage('Invalid email.');
    } else if (!brand || !brand.length) {
      setErrorMessage('Invalid brand name.');
    } else if (!pass.length || !rePass.length) {
      setErrorMessage('Invalid password.');
    } else if (pass !== rePass) {
      setErrorMessage('Password not matching.');
    } else {
      Restaurant.Register({ email, password: pass, brandName: brand })
        .then((res) => res.data)
        .then((res) => {
          let { RestaurantDoc } = res;
          props.reduxUserRegister({
            type: 'restaurant',
            user: RestaurantDoc,
            authorization: RestaurantDoc._id,
          });
        })
        .catch((err) => {
          console.log(err.response.data);
          setErrorMessage(err.response.data.message);
        });
    }
  };

  return (
    <ParentView>
      <BackgroundImage source={backgroundImage}>
        <ScrollView>
          <View style={{ flex: 1 }}>
            <Image
              source={Hukah}
              style={{
                width: '60%',
                height: 40,
                alignSelf: 'center',
                marginTop: 40,
              }}
            />
          </View>

          <SubView>
            <TextInputView>
              <ImageView source={mail} />
              <TextInput
                placeholder="Enter your Email...."
                value={email}
                onChangeText={(e) => setEmail(e)}
              />
            </TextInputView>

            <TextInputView>
              <ImageView source={brands} />
              <TextInput
                placeholder="Enter your Brand..."
                value={brand}
                onChangeText={(e) => setBrand(e)}
              />
            </TextInputView>

            <TextInputView>
              <ImageView source={passs} />
              <TextInput
                placeholder="Enter your Password..."
                value={pass}
                onChangeText={(e) => setPass(e)}
              />
            </TextInputView>

            <TextInputView>
              <ImageView source={passs} />
              <TextInput
                placeholder="Confirm your Password..."
                value={rePass}
                onChangeText={(e) => setRePass(e)}
              />
            </TextInputView>
            <Text style={{ color: 'red' }}>{errorMessage}</Text>
            <SignUpView style={{ marginBottom: 20 }} onPress={onsubmit}>
              <Text> SignUp</Text>
            </SignUpView>
          </SubView>
        </ScrollView>
        <AccountView>
          <Text style={{ color: 'white' }}>Already have an Account?</Text>
          <TouchableOpacity onPress={() => props.navigation.navigate('LogIn')}>
            <Text
              style={{ color: 'red', fontWeight: 'bold', paddingHorizontal: 5 }}
            >
              LogIn
            </Text>
          </TouchableOpacity>
        </AccountView>
      </BackgroundImage>
    </ParentView>
  );
};

const mapDispatchToProps = (dispatch) => {
  return { reduxUserRegister: (user) => dispatch(registerUser(user)) };
};

export default connect(null, mapDispatchToProps)(SignUp);
