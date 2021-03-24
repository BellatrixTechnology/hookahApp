import React from 'react';
import Button from '../Button/Button';
import {Row} from './styles';

const DualButton = (props) => {
  return (
    <Row>
      <Button style={props.style} onPress={props.onFirstPress} inverted title={props.firstTitle} />
      <Button style={props.style} onPress={props.onSecondPress} title={props.secondTitle} />
    </Row>
  );
};

export default DualButton;
