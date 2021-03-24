import styled from 'styled-components';

export const ParentView = styled.View`
  flex: 1;
`;
export const BackgroundImage = styled.ImageBackground`
width : 100%
height : 100%
justify-content : center;
align-items : center
`;

export const SubView = styled.View`
  height: 25%;
  width: 80%;
  background-color: white;
`;

export const TextView = styled.Text`
  font-weight: bold;
  font-size: 15px;
  text-align: center;
  padding-vertical: 15px;
  color: white;
  width: 80%;
`;

export const ImageView = styled.Image`
  width: 20px;
  height: 20px;
  align-self: center;
  margin-horizontal: 10px;
`;
