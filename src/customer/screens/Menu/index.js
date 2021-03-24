import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  TouchableOpacity,
  ActivityIndicator,
  BackHandler,
} from 'react-native';
import BackgroundImage from '../../assets/images/homeBackground.jpg';
import Container from '../../components/Basic/Container';
import { styles, Scroll, OptionBtn, List } from './styles';
import ProductCard from '../../components/ProductCard';
import Header from '../../components/Header';
import RText from '../../components/Basic/RText';
import CategoryAPI from '../../../restaurant/api/category';
import ProductsAPI from '../../../restaurant/api/products';
import { connect } from 'react-redux';
import ResponsiveText from '../../../restaurant/components/ResponsiveText';

const Menu = (props) => {
  const { _restaurant } = props.route.params;
  const [categoriesDataSet, setCategoriesDataSet] = useState([]);
  const [products, setProducts] = useState([]);
  const [activeOption, setActiveOption] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [reFetch, setReFetch] = useState(0);

  useEffect(() => {
    // console.log(props.route.params._restaurant);
    if (props.route.params._restaurant) {
      // get all category by restaurant id
      CategoryAPI.GetAllCategoriesForCustomer(props.route.params._restaurant)
        .then((res) => res.data.data)
        .then((res) => {
          setCategoriesDataSet(res.categories);
          console.log('Testing categories', categoriesDataSet);
          setActiveOption(res.categories[0]);
          getAllProductsByCategory(props.user.user._id, res.categories[0]._id);
        })
        .catch((err) => {
          console.log('GET ALL CATEGORIES ERR', err.response);
          setErrorMessage('Something went wrong try later.');
        })
        .finally(() => {});
    } else {
      setErrorMessage('try again later.');
    }
  }, [reFetch]);

  const onLocationPress = (item, _restaurant) => {
    props.navigation.navigate('ProductDetail', {
      data: item,
      _restaurant: _restaurant,
    });
  };

  const getAllProductsByCategory = (_id, _category) => {
    setLoading(true);
    // ProductsAPI.GetProducts({ _id, _category })
    //   .then((res) => res.data.data)
    //   .then((res) => {
    //     console.log({ res });
    //     setProducts(res);
    //   })
    //   .catch((err) => {
    //     console.log('GET ALL PRODUCTS ERR', err.response);
    //     setErrorMessage('Something went wrong try later.');
    //   })
    //   .finally(() => {
    //     setLoading(false);
    //   });

    ProductsAPI.ProductsByCategoryID(_category)
      .then((res) => res.data.data)
      .then((res) => {
        console.log({ res });
        setProducts(res);
      })
      .catch((err) => {
        console.log('GET ALL PRODUCTS ERR', err.response);
        setErrorMessage('Something went wrong try later.');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Container backgroundImage={BackgroundImage}>
      <Header
        title={'Explore Hukah'}
        onBackPress={props.navigation.goBack}
        onRightPress={() =>
          props.navigation.navigate('MyCart', {
            extras: '',
            specialInstructions: 'none',
            variant: 'not selected',
          })
        }
      />
      <Scroll>
        <ScrollView horizontal contentContainerStyle={styles.optionsContainer}>
          {categoriesDataSet &&
            categoriesDataSet.map((item) => (
              <OptionBtn
                onPress={() => {
                  setActiveOption(item);
                  console.log({ item });
                  getAllProductsByCategory(props.user.user._id, item._id);
                }}
              >
                <RText
                  style={[
                    styles.topLabel,
                    activeOption === item ? styles.topLabelActive : {},
                  ]}
                >
                  {item.name}
                </RText>
              </OptionBtn>
            ))}
        </ScrollView>
        {loading ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ActivityIndicator size='large' color='#ffffff' />
          </View>
        ) : !products.length ? (
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
          >
            <ResponsiveText style={{ color: 'lightgrey' }}>
              No products.
            </ResponsiveText>
          </View>
        ) : (
          <List
            numColumns={2}
            data={products}
            renderItem={({ item }) => (
              <ProductCard
                restaurant={_restaurant}
                item={item}
                onPress={() => {
                  // onLocationPress(item, _restaurant);
                  item.quantity > 0 ? onLocationPress(item, _restaurant) : null;
                }}
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
export default connect(mapStateToProps, null)(Menu);
