import React, {useState} from 'react';
import {
  Background,
  ModalContent,
  RowApart,
  Smiley,
  Star,
  styles,
} from './styles';
import {Modal, TouchableWithoutFeedback} from 'react-native';
import RText from '../../Basic/RText';
import Button from '../../Button/Button';
import SmileyIcon from '../../../assets/icons/smiley.png';
import StarIcon from '../../../assets/icons/starOrange.png';
import StarEmptyIcon from '../../../assets/icons/starEmpty.png';

const RateUs = (props) => {
  const [rating, setRating] = useState(1);
  return (
    <Modal transparent visible={props.visible} onRequestClose={props.onClose}>
      <Background>
        <ModalContent>
          <Smiley source={SmileyIcon} />
          <RText style={styles.rateUs}>Rate us</RText>
          <RText style={styles.question}>How was your Order?</RText>
          <RowApart>
            {[...Array(5)].map((item, index) => (
              <TouchableWithoutFeedback onPress={() => setRating(index + 1)}>
                <Star source={index + 1 <= rating ? StarIcon : StarEmptyIcon} />
              </TouchableWithoutFeedback>
            ))}
          </RowApart>
          <RowApart>
            <Button title={'Submit Feedback'} onPress={props.onClose} />
          </RowApart>
        </ModalContent>
      </Background>
    </Modal>
  );
};

export default RateUs;
