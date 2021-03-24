import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import {
  ActiveButton,
  ItemsView,
  ParentView,
  SmallText,
  TitleText,
  TitleView,
  DollarText,
  SmallTextView,
} from './styles';
import hookah from '../../assets/icons/hookah.png';
import moment from 'moment';
const PastOrders = (props) => {
  const { data } = props;
  return (
    <TouchableOpacity>
      <View>
        <ItemsView
          style={{
            backgroundColor: data.status === 'Active' ? '#2D2D2D' : '#141414',
          }}
        >
          <View
            style={{
              padding: 10,
              paddingVertical: 15,
            }}
          >
            <Image
              source={hookah}
              style={{
                height: 70,
                width: 70,
                borderRadius: 35,
                justifyContent: 'center',
              }}
            />
          </View>
          <TitleView>
            <View style={{ position: 'absolute', left: 0 }}>
              <TitleText>{data.alias}</TitleText>
            </View>
          </TitleView>
          <View style={{ flex: 1, alignItems: 'center' }}>
            <DollarText>$ {data.total}</DollarText>
          </View>
        </ItemsView>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: data.status === 'Active' ? '#2D2D2D' : '#141414',
          }}
        >
          <View style={{ width: 90, height: 30, paddingVertical: 25 }} />
          <View style={{ position: 'absolute', left: 15 }}>
            <SmallTextView>
              {/*<SmallText>{data.createdAt.substring(0, 16)} </SmallText>*/}
              <SmallText>{moment(data).format('L')} </SmallText>
            </SmallTextView>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              position: 'absolute',
              right: 10,
            }}
          >
            <ActiveButton
              style={{
                backgroundColor: data.status === 'Active' ? 'white' : '#FF9821',
                alignSelf: 'flex-start',
              }}
              onPress={() => props.navigation.navigate('YourOrder')}
            >
              <Text>{data.status}</Text>
            </ActiveButton>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PastOrders;
