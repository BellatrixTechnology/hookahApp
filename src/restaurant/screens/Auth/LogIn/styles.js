import styled from 'styled-components';

export const ParentView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  height: 100%;
  justify-content: center;
`;

export const SubView = styled.View`
  justify-content: center;
  align-items: center;
  padding-horizontal: 30px;
  height: 90%;
`;

export const TextInputView = styled.View`
  background-color: white;
  flex-direction: row;
  width: 100%;
  margin-top: 20px;
`;

export const ImageView = styled.Image`
  height: 20px;
  width: 20px;
  align-self: center;
  margin-horizontal: 10px;
`;

export const LogInView = styled.TouchableOpacity`
  width: 100%;
  background-color: #e56e0d;
  padding: 10px;
  align-items: center;
`;

export const AccountView = styled.View`
  flex-direction: row;
  margin-bottom: 15px;
  align-self: center;
`;
export const SignUpText = styled.Text`
  color: red;
  font-weight: bold;
  padding-horizontal: 5px;
`;
