import {wp} from '../../helpers/Responsiveness';
import {Colors, Fonts} from '../../config/Theme';

export const styles = {
  tab: {
    backgroundColor: 'black',
    height: wp(11),
  },
  indicator: {
    backgroundColor: Colors.Accent,
  },
  label: {
    fontSize: wp(3.5),
    fontFamily: Fonts.Regular,
    textTransform: 'capitalize',
  },
};
