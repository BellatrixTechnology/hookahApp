import React from 'react';
import {TouchableOpacity} from 'react-native';
import RText from '../Basic/RText';
import BackIcon from '../../assets/icons/back.png';
import {HeaderContainer, Icon, styles} from './styles';

const Header = (props) => {
  return (
    <HeaderContainer>
      <TouchableOpacity onPress={props.onBackPress}>
        <Icon source={BackIcon} />
      </TouchableOpacity>
      <RText style={styles.title}>{props.title}</RText>
        {!props.righticondisable && <Icon source={BackIcon}/>}
    </HeaderContainer>
  );
};

export default Header;
