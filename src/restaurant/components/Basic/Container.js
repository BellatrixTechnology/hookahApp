import React from 'react';
import {StatusBar, View} from 'react-native';
import {Colors} from '../../config/Theme';
import {hp, wp} from '../../helpers/Responsiveness';
import SafeAreaView from 'react-native-safe-area-view';

const Container = (props) => {
  return (
    <View style={[styles.noOverlay]}>
      <SafeAreaView
        style={[styles.container, props.style]}
        forceInset={{top: props.translucent ? 'never' : 'always'}}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={props.translucent ? 'transparent' : Colors.StatusBar}
          translucent={props.translucent || false}
        />
        {props.children}
      </SafeAreaView>
    </View>
  );
};

export default Container;

const styles = {
  container: {
    flex: 1,
    position: 'relative',
  },
  overlay: {
    flex: 1,
    backgroundColor: '#000000e6',
  },
  noOverlay: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundImage: {
    height: hp(100),
    width: wp(100),
  },
};
