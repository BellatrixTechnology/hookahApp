import styled from 'styled-components';
import { wp } from '../../helpers/Responsiveness';
import { Colors, Fonts } from '../../config/Theme';

export const RowApart = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: ${wp(4.5)}px ${wp(5)}px;
`;
export const ProductImage = styled.Image`
  width: ${wp(90)}px;
  height: ${wp(50)}px;
  resize-mode: cover;
`;
export const DummyView = styled.View`
  background-color: grey;
  width: 100%;
  height: 140px;
  justify-content: center;
  align-items: center;
`;
export const DummyImage = styled.Image`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
`;
export const Content = styled.View`
  flex: 1;
  padding: ${wp(5)}px;
  padding-top: 0;
`;
export const CameraCircle = styled.TouchableOpacity`
  top: -20px;
  align-self: center;
  width: ${wp(10)}px;
  height: ${wp(10)}px;
  border-radius: ${wp(5)}px;
  justify-content: center;
  align-items: center;
  background-color: ${Colors.PrimaryText};
`;
export const CameraIcon = styled.Image`
  width: ${wp(5)}px;
  height: ${wp(5)}px;
  resize-mode: contain;
`;
export const MoreIcon = styled.Image`
  width: ${wp(10)}px;
  height: ${wp(10)}px;
  resize-mode: contain;
`;

export const ExtraBox = styled.View`
  margin-bottom: ${wp(5)}px;
  padding-vertical: ${wp(2)}px;
  flex-direction: row;
  border: 1px solid ${Colors.Border};
  border-radius: ${wp(1)}px;
`;
export const ExtraItem = styled.View`
  justify-content: center;
  align-items: center;
  height: 28px;
  width: 60px;
  border-radius: ${wp(4)};
  margin-horizontal: ${wp(1)};
  ${({ selected }) =>
    `background-color: ${selected ? Colors.PrimaryText : Colors.Border}`};
`;
export const ExtraText = styled.Text`
  font-size: ${wp(3.25)}px;
  ${({ selected }) => `color: ${selected ? 'black' : 'grey'}`};
  font-family: ${Fonts.Medium};
`;
export const styles = {
  descriptionBox: {
    height: wp(25),
    justifyContent: 'flex-start',
    paddingVertical: wp(2.5),
  },
  saveText: {
    fontSize: 4.5,
  },
  saveBtn: {
    paddingVertical: wp(3),
  },
  extraText: {
    fontSize: 3.5,
    paddingLeft: wp(2),
    marginTop: wp(3),
  },
  addImageText: {
    top: -10,
    fontSize: 3.25,
    opacity: 0.5,
    alignSelf: 'center',
    marginBottom: wp(3),
  },
};
