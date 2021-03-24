import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import DeviceInfo from 'react-native-device-info';
import { registerUser } from '../redux/user/actions';
import { connect } from 'react-redux';
import Customer from '../customer/api/user';
import { ActivityIndicator } from 'react-native';

const SelectSide = (props) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (props.user.type === 'customer') {
      props.navigation.navigate('CustomerHomeStack');
    } else if (props.user.type === 'restaurant') {
      props.navigation.navigate('RestaurantHomeStack');
    } else {
      setLoading(false);
      console.log('Decision pending');
    }
  }, []);

  const customerSide = async () => {
    setLoading(true);
    let uniqueId = await DeviceInfo.getUniqueId();
    console.log(uniqueId);
    if (uniqueId.length) {
      Customer.Auth(uniqueId)
        .then((res) => res.data.data)
        .then((res) => {
          props.reduxUserRegister({
            type: 'customer',
            user: res.customer,
            authorization: res.customer._id,
          });
          props.navigation.navigate('CustomerHomeStack');
          setLoading(false);
        })
        .catch((err) => {
          console.log('register customer, ', err.response.data.message);
          alert('Something went wrong ');
        });
    } else {
      alert('Something went wrong ');
    }
  };

  if (loading) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}
      >
        <ActivityIndicator size="large" color="#ffffff" />
      </View>
    );
  }

  return (
    <View
      style={{
        backgroundColor: 'black',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          width: '70%',
          alignItems: 'center',
          marginBottom: 30,
        }}
        onPress={customerSide}
      >
        <Text style={{ color: 'white', paddingVertical: 15 }}>
          Customer Side
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: 'orange',
          width: '70%',
          alignItems: 'center',
        }}
        onPress={() => props.navigation.navigate('RestaurantHomeStack')}
      >
        <Text style={{ color: 'white', paddingVertical: 15 }}>
          Restaurant Side
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return { reduxUserRegister: (user) => dispatch(registerUser(user)) };
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectSide);
