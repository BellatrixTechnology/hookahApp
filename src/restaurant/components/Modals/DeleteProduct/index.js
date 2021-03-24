import React from 'react';
import {View} from 'react-native';
import {
  Background,
  ModalContent,
  RowApart,
  Row,
  ProductImage,
  styles,
  CancelButton,
  CancelImage,
} from './styles';
import {Modal} from 'react-native';
import RText from '../../Basic/RText';
import RoundedButton from '../../Buttons/RoundedButton/Button';
import cancel from '../../../assets/icons/cancel.png';

const DeleteProduct = (props) => {
  return (
    <Modal transparent visible={props.visible} onRequestClose={props.onClose}>
      <Background>
        <ModalContent>
          <Row>
            <ProductImage source={props.item.image} />
            <View>
              <RText style={styles.title}>{props.item.title}</RText>
              <RText style={styles.description}>{props.item.title}</RText>
            </View>
          </Row>
          <RText style={styles.question}>
            Are you sure you want to delete this item?
          </RText>
          <RowApart style={{width: '100%'}}>
            <RoundedButton
              red
              title={'Cancel'}
              textStyle={{color: 'white'}}
              onPress={props.onClose}
              style={styles.button}
            />
            <RoundedButton
              title={'Ok'}
              onPress={props.onOk}
              style={styles.button}
            />
          </RowApart>
        </ModalContent>
      </Background>
    </Modal>
  );
};

export default DeleteProduct;
