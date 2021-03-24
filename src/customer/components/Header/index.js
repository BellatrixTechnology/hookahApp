import React from 'react';
import {TouchableOpacity} from 'react-native';
import RText from '../Basic/RText';
import BackIcon from '../../assets/icons/back.png';
import ShoppingCartIcon from '../../assets/icons/cart.png';
import {HeaderContainer, Icon, CartIcon, styles} from './styles';
import { connect } from 'react-redux';
import {logoutUser} from "../../../redux/user/actions";

const Header = (props) => {
  return (
    <HeaderContainer style={props.style}>
      <TouchableOpacity onPress={props.onBackPress}>
        <Icon source={BackIcon} />
      </TouchableOpacity>
      <RText style={styles.title}>{props.title}</RText>
      {props.onRightPress && (
        <TouchableOpacity onPress={props.onRightPress}>
          {props.rightText ? (
            <RText>{props.rightText}</RText>
          ) : (
            <CartIcon source={ShoppingCartIcon} />
          )}
        </TouchableOpacity>
      )}
      {/*<TouchableOpacity style={{marginLeft: 10}} onPress={()=>props.reduxLogoutUser()}>*/}
      {/*<RText>Logout</RText>*/}
      {/*</TouchableOpacity>*/}
    </HeaderContainer>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
        reduxLogoutUser: () => dispatch(logoutUser()),
    };
};

export default connect(null, mapDispatchToProps)(Header);
