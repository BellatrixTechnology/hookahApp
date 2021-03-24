import React, { useState, useEffect } from 'react';
import BackgroundImage from '../../assets/images/homeBackground.jpg';
import Container from '../../components/Basic/Container';
import { Title, Scroll, TopBar } from './styles';
import { FlatList } from 'react-native';
import {
  Image,
  TouchableOpacity,
  View,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import SearchBar from '../../components/SearchBar';
import ViewSwitch from '../../components/ViewSwitch';
import { Locations } from '../../MockData';
import LocationCard from '../../components/LocationCard';
import order from '../../assets/icons/order.png';
import RestaurantExternal from '../../../restaurant/api/restaurants';
import ResponsiveText from '../../../restaurant/components/ResponsiveText';
import { connect } from 'react-redux';
import { logoutUser, registerUser } from '../../../redux/user/actions';

const Home = (props) => {
  const [resData, setResData] = useState([]);
  const [restaurantsData, setRestaurantsData] = useState([]);
  const [filteredData, setFilteredData] = useState(restaurantsData);
  const [view, setView] = useState(false);
  const [searchFilter, setSearchFilter] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [fetchAgain, setFetchAgain] = useState(0);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState('false');

  useEffect(() => {
    setLoading(true);
    RestaurantExternal.getAll()
      .then((res) => res.data.data)
      .then((res) => {
        setRestaurantsData(res.restaurants);
        setResData(res.restaurants);
        setLoading(false);
      })
      .catch((err) => {
        console.log('Error get all restaurants', err.response);
        setErrorMessage('Something went wrong.');
      });
  }, [fetchAgain]);

  const onLocationPress = (item) => {
    props.navigation.navigate('Menu', { _restaurant: item._id });
  };

  // const filterRestaurantsBySearch = (e) => {
  //   setSearchFilter(e);
  //   let love = restaurantsData.filter((item) => console.log(item.brandName.includes(searchFilter)));
  //   setRestaurantsData([...love]);
  // };

  const searchData = (text) => {
    const newData = restaurantsData.filter((item) => {
      return item.brandName.search(text) > -1;
    });
    if (text.length === 0) {
      setRestaurantsData(resData);
    } else {
      setRestaurantsData(newData);
    }
    setInput(text);
  };

  return (
    <Container background={BackgroundImage}>
      <Scroll>
        <View
          style={{
            paddingHorizontal: 5,
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <TouchableOpacity
            onPress={() => props.navigation.navigate('OrderHistory')}
          >
            {/*onPress={() => props.navigation.navigate('MyCart')}>*/}
            <Image
              source={order}
              style={{
                height: 30,
                width: 30,
                tintColor: 'white',
                alignSelf: 'flex-end',
              }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.reduxLogoutUser();
              props.navigation.navigate('SelectSide');
            }}
            style={{ marginLeft: 10 }}
          >
            <ResponsiveText style={{ color: 'white' }}>Logout</ResponsiveText>
          </TouchableOpacity>
        </View>
        <Title>Find best Hookah Bar nearby</Title>
        <TopBar>
          {/*<SearchBar onChangeText={(e) => setSearchFilter(e)} />*/}
          <SearchBar onChangeText={(text) => searchData(text)} value={input} />
          <ViewSwitch
            view={view}
            onPress={() => {
              setView(!view);
            }}
          />
        </TopBar>
        {loading ? (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              backgroundColor: '#000',
              alignSelf: 'center',
            }}
          >
            <ActivityIndicator size='large' color='#ffffff' />
          </View>
        ) : (
          <FlatList
            numColumns={view ? 1 : 2}
            key={view ? 'h' : 'v'}
            // data={filteredData.length ? filteredData : restaurantsData}
            data={restaurantsData}
            renderItem={({ item }) => (
              <LocationCard
                item={item}
                onPress={() => onLocationPress(item)}
                horizontal={view}
              />
            )}
          />
        )}
      </Scroll>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    reduxLogoutUser: () => dispatch(logoutUser()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
