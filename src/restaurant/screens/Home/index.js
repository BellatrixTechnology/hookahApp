import React, { useEffect, useState } from 'react';
import Container from '../../components/Basic/Container';
import MainHeader from '../../components/Headers/MainHeader';
import {
  RowApart,
  Centered,
  styles,
  ProductImage,
  TextBox,
  StatsIcon,
  Stats,
  CalendarButton,
  CalendarIcon,
  OpenCloseIcon,
} from './styles';
import {
  View,
  ScrollView,
  TouchableOpacity,
  Platform,
  BackHandler,
} from 'react-native';
import RText from '../../components/Basic/RText';
import VerticalLine from '../../components/Lines/VerticalLine';
import { ProductsData } from '../../MockData';
import Button from '../../components/Buttons/Button/Button';
import IncomeIcon from '../../assets/icons/income.png';
import TodayIcon from '../../assets/icons/today.png';
import OrdersIcon from '../../assets/icons/orders.png';
import DownIcon from '../../assets/icons/down.png';
import Calendar from '../../assets/icons/calendar.png';
import HorizontalLine from '../../components/Lines/HorizontalLine';
import RoundedButton from '../../components/Buttons/RoundedButton/Button';
import OrderList from '../../components/OrderList';
import DateTimePicker from '@react-native-community/datetimepicker';
import { connect } from 'react-redux';
import RestaurantExternal from '../../../restaurant/api/restaurants';
import ProductsAPI from '../../api/products';
import { socket } from '../../../config/Sockets';

const Home = (props) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const [orders, setOrders] = useState([]);
  const [products, setProducts] = useState([]);
  const [totalOrdersInAMonth, setTotalOrdersInAMonth] = useState(0);
  const [totalOrdersInADate, setTotalOrdersInADate] = useState(0);
  const [fetchAgain, setFetchAgain] = useState(0);
  let earn = 0;
  const [earning, setEarning] = useState(0);
  const [pricePrivacy, setPricePrivacy] = useState(true);

  useEffect(() => {
    // const backAction = () => {
    //   BackHandler.exitApp();
    //   return true;
    // };

    // BackHandler.addEventListener('hardwareBackPress', backAction);

    RestaurantExternal.GetOngoingOrders(props.user.authorization)
      .then((res) => {
        setOrders(res.data.data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
    RestaurantExternal.GetRestuarantStats(date)
      .then((res) => {
        setTotalOrdersInAMonth(res.data.data.totalOrdersInAMonth);
        setTotalOrdersInADate(res.data.data.ordersInaDate.length);
        earn = 0;
        for (let i = 0; i < res.data.data.ordersInaDate.length; i++) {
          // setEarning(earning + res.data.data.ordersInaDate[i].total);
          earn = earn + res.data.data.ordersInaDate[i].total;
        }
        setEarning(earn);
      })
      .catch((err) => {
        console.log(err);
      });
    ProductsAPI.ProductsByRestuarantID(props.user.authorization)
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err.response.data));

    // socket.emit('TOGGLE_PRICE', {
    //   restaurant_id: props.user.authorization,
    // });
    socket.on('TOGGLE_PRICE', (restaurant) => {
      console.log('Privacy is', restaurant.prices);
      setPricePrivacy(restaurant.prices);
    });
  }, [fetchAgain]);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
    RestaurantExternal.GetRestuarantStats(date)
      .then((res) => {
        setTotalOrdersInAMonth(res.data.data.totalOrdersInAMonth);
        setTotalOrdersInADate(res.data.data.ordersInaDate.length);
        setEarning(0);
        earn = 0;
        for (let i = 0; i < res.data.data.ordersInaDate.length; i++) {
          // setEarning(earning + res.data.data.ordersInaDate[i].total);
          earn = earn + res.data.data.ordersInaDate[i].total;
        }
        setEarning(earn);
      })
      .catch((err) => {
        console.log(err);
      });
    setFetchAgain(Math.random());
    console.log(selectedDate, currentDate);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode('date');
  };

  const onViewAllProducts = () => {
    props.navigation.navigate('Products');
  };

  const onEditProduct = (item) => {
    props.navigation.navigate('ProductDetail', { item, edit: true });
  };

  const onNewOrders = () => {
    props.navigation.navigate('Orders', {
      initialRoute: 'Ongoing Orders',
    });
  };

  const onOngoingOrders = () => {
    props.navigation.navigate('Orders', {
      initialRoute: 'Ongoing Orders',
    });
  };

  const changePrivacy = () => {
    socket.emit('TOGGLE_PRICE', { restaurant_id: props.user.authorization });
    socket.on('TOGGLE_PRICE', (restaurant) => {
      console.log('changed', restaurant);
    });
    setPricePrivacy(!pricePrivacy);
  };

  return (
    <Container>
      <ScrollView>
        <MainHeader
          title={'Hookah Bar'}
          onDrawerPress={() => props.navigation.openDrawer()}
        />
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          {pricePrivacy ? (
            // <RoundedButton
            //   title={'Hide Prices'}
            //   textStyle={{ color: '#fff' }}
            //   style={{ backgroundColor: 'red', marginTop: 20 }}
            //   onPress={changePrivacy}
            // />
            <CalendarButton onPress={changePrivacy}>
              <RText
                style={{ color: 'black', fontSize: 3, alignItems: 'center' }}
              >
                {'   '}Hide Prices
              </RText>
            </CalendarButton>
          ) : (
            // <RoundedButton
            //   title={'Show Prices'}
            //   textStyle={{ color: '#fff' }}
            //   style={{ backgroundColor: 'green' }}
            //   onPress={changePrivacy}
            // />
            <CalendarButton onPress={changePrivacy}>
              <RText
                style={{ color: 'black', fontSize: 3, alignItems: 'center' }}
              >
                {'   '}Show Prices
              </RText>
            </CalendarButton>
          )}
          <CalendarButton onPress={showDatepicker}>
            <CalendarIcon source={Calendar} />
            <RText style={{ color: 'black', fontSize: 3 }}>
              {date.toLocaleDateString() === new Date().toLocaleDateString()
                ? 'Today'
                : date.toLocaleDateString()}
            </RText>
            {show && (
              <DateTimePicker
                testID='dateTimePicker'
                value={date}
                mode={mode}
                is24Hour={true}
                display='default'
                onChange={onChange}
              />
            )}
            <OpenCloseIcon source={DownIcon} />
          </CalendarButton>
        </View>
        <Stats>
          <Centered>
            <StatsIcon source={OrdersIcon} />
            <RText style={styles.smallText}>Monthly Orders</RText>
            <RText>{totalOrdersInAMonth}</RText>
          </Centered>
          <View>
            <VerticalLine />
          </View>
          <Centered>
            <StatsIcon source={IncomeIcon} />
            <RText style={styles.smallText}>Today's Earning</RText>
            <RText>{earning}</RText>
          </Centered>
          <View>
            <VerticalLine />
          </View>
          <Centered>
            <StatsIcon source={TodayIcon} />
            <RText style={styles.smallText}>Orders Today</RText>
            <RText>{totalOrdersInADate}</RText>
          </Centered>
        </Stats>
        <HorizontalLine />
        <RowApart style={styles.verticalPadding}>
          <RText style={styles.title}>Products</RText>
          <TouchableOpacity onPress={onViewAllProducts}>
            <RText style={styles.greyText}>View All</RText>
          </TouchableOpacity>
        </RowApart>
        <HorizontalLine />
        {/* {ProductsData.slice(0, 3).map((item, index) => (
          <>
            <RowApart>
              <ProductImage source={item.image} />
              <TextBox>
                <RText style={styles.mediumText}>{item.title}</RText>
                <RText style={styles.smallText}>{item.title}</RText>
              </TextBox>
              <Button
                title={'Edit'}
                inverted
                style={styles.editButton}
                textStyle={styles.editText}
                onPress={() => onEditProduct(item)}
              />
            </RowApart>
            <HorizontalLine style={{ opacity: 0.5 }} />
          </>
        ))} */}
        {products.data != null &&
          products.data.map((item, index) => (
            <>
              <RowApart>
                <ProductImage source={ProductsData[index].image} />
                <TextBox>
                  <RText style={styles.mediumText}>
                    {products.data[index].name}
                  </RText>
                  <RText style={styles.smallText}>
                    {products.data[index].description}
                  </RText>
                </TextBox>
                <Button
                  title={'Edit'}
                  inverted
                  style={styles.editButton}
                  textStyle={styles.editText}
                  onPress={() => onEditProduct(products.data[index])}
                />
              </RowApart>
              <HorizontalLine style={{ opacity: 0.5 }} />
            </>
          ))}
        <RowApart>
          <RoundedButton
            title={'New Orders'}
            onPress={onNewOrders}
            style={styles.darkButton}
            textStyle={styles.whiteText}
          />
          <RoundedButton title={'Ongoing Orders'} onPress={onOngoingOrders} />
        </RowApart>
        {/* <OrderList orders={orders[0]} /> */}
        <Centered>
          <TouchableOpacity onPress={onNewOrders}>
            <RText
              style={
                (styles.accentText,
                { fontSize: 5, marginTop: 40, color: '#d98209' })
              }
            >
              View Orders
            </RText>
          </TouchableOpacity>
        </Centered>
      </ScrollView>
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(Home);
