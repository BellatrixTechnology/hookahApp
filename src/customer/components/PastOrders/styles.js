import styled from 'styled-components';

export const ItemsView = styled.View`
  margin-top: 20;
  flex-direction: row;
  background-color: #2D2D2D;
`;

// export const ImageView = styled.Image`
// background-color: 'red';
// padding: 10px;
// padding-vertical: 15px;
// `;

export const TitleView = styled.View`
  flex: 1.5;
`;
export const SmallTextView= styled.View`
flex: 1.5;
justify-content: center

`
export const TitleText = styled.Text`
  font-size: 17;
  color: white;
  padding-vertical: 20;
  font-weight : bold;
  align-self: center;
`;
export const SmallText = styled.Text`
  font-size: 12;
  color: white;

`;
export const ActiveButton = styled.TouchableOpacity`
  padding-vertical: 5;
  background-color: white;
  border-radius: 15;
  margin-right: 7
  width : 90
  align-items : center
  justify-content : center

  
`;

export const DollarText = styled.Text`
  font-size: 17;
  color: white;
  padding-vertical: 20;
  color: #FF9821;
  font-weight : bold
`;
