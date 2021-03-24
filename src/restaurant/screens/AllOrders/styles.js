import styled from 'styled-components';
import { wp } from '../../helpers/Responsiveness';
import { Colors, Fonts } from '../../config/Theme';

export const RowApart = styled.View`
  padding-top: ${wp(3.5)}px;
  padding-left: ${wp(4.5)}px;
  padding-right: ${wp(4.5)}px;
`;
export const SubRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const ProductImage = styled.Image`
  width: ${wp(10)}px;
  height: ${wp(10)}px;
  border-radius: ${wp(5)}px;
  resize-mode: cover;
`;

export const TextBox = styled.View``;
export const styles = {
  viewButton: {
    height: wp(10),
    paddingHorizontal: wp(5),
    borderWidth: 1,
  },
  title: {
    fontFamily: Fonts.Regular,
    textTransform: 'uppercase',
  },
  verticalPadding: {
    paddingVertical: wp(2),
  },
  noPadding: {
    paddingVertical: wp(0),
    paddingHorizontal: wp(0),
  },
  dualButton: {
    height: wp(8.5),
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'black',
    borderRadius: 5,
    padding: wp(7),
    shadowColor: '#c40808',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    width: wp('80'),
    borderWidth: 2,
    borderColor: '#3C3B3B',
  },
  openButton: {
    borderRadius: 50,
    elevation: 2,
    position: 'absolute',
    right: 15,
    top: 15,
    padding: 8,
    paddingHorizontal: 15,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },
  modalInputContainer: {},
  addCategoryInputField: {
    height: wp(11),
    justifyContent: 'center',
    paddingVertical: wp(2.5),
    paddingHorizontal: wp(2.5),
    borderWidth: 1,
    borderColor: Colors.Border,
    borderRadius: wp(1),
    marginTop: wp(2.5),
    marginBottom: wp(4),
    backgroundColor: 'black',
  },
  imagePicker: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    height: wp('25'),
    width: wp('25'),
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: wp('13'),
    marginVertical: 15,
  },
  image: {
    height: wp('25'),
    width: wp('25'),
    borderRadius: wp('13'),
  },
};
