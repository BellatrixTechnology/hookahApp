import React from 'react';
import {StatusBar, ImageBackground, View} from 'react-native';
import {Colors} from '../../config/Theme';
import BackgroundImage from '../../assets/images/homeBackground.jpg';
import {hp, wp} from '../../helpers/Responsiveness';
import SafeAreaView from 'react-native-safe-area-view';

const Container = (props) => {
  return (
    <ImageBackground
      source={!props.noBackground && (props.backgroundImage || BackgroundImage)}
      style={styles.backgroundImage}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={props.translucent ? 'transparent' : Colors.StatusBar}
        translucent={props.translucent || false}
      />
      <View style={[!props.noBackground ? styles.overlay : styles.noOverlay]}>
        <SafeAreaView
          style={[styles.container, props.style]}
          forceInset={{top: props.translucent ? 'never' : 'always'}}>
          {props.children}
        </SafeAreaView>
      </View>
    </ImageBackground>
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
    backgroundColor: Colors.Background,
  },
  backgroundImage: {
    width: wp(100),
    flex: 1,
  },
};
