import React from 'react';
import { TouchableOpacity } from 'react-native';
import RText from '../../Basic/RText';
import DrawerIcon from '../../../assets/icons/drawer.png';
import BellIcon from '../../../assets/icons/Bell.png';
import { HeaderContainer, Icon, Bell, styles } from './styles';
import { logoutUser } from '../../../../redux/user/actions';
import { connect } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

const MainHeader = (props) => {
  const navigation = useNavigation();
  return (
    <HeaderContainer style={props.style}>
      <TouchableOpacity onPress={props.onDrawerPress}>
        <Icon source={DrawerIcon} />
      </TouchableOpacity>
      <RText style={styles.title}>{props.title}</RText>
      {/*<TouchableOpacity onPress={props.onBellPress}>*/}
      {/*  <Bell source={BellIcon} />*/}
      {/*</TouchableOpacity>*/}
      <TouchableOpacity
        onPress={() => {
          props.reduxLogoutUser();
          navigation.navigate('SelectSide');
        }}
      >
        <RText>Logout</RText>
      </TouchableOpacity>
    </HeaderContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxLogoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(null, mapDispatchToProps)(MainHeader);
