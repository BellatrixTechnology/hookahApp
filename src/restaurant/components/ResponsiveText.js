import React from 'react';
import { Text } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

function ResponsiveText(props) {
  const { style, children } = props;
  let fontSize = wp('4%');
  let lineHeight = wp('5.5%');

  if (style && style.fontSize) {
    fontSize = wp(style.fontSize);
  }
  if (style && style.fontSize) {
    lineHeight = wp(style.fontSize) + wp('1%');
  }
  if (style && style.lineHeight) {
    lineHeight = style.lineHeight;
  }
  return (
    <Text style={[styles.text, props.style, { fontSize, lineHeight }]}>
      {children}
    </Text>
  );
}

const styles = {
  text: {
    // color: Color.PrimaryText,
    // fontFamily: Fonts.MontserratMedium,
  },
};
export default ResponsiveText;
