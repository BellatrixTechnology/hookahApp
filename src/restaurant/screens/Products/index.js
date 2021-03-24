import React, { useState, useEffect } from 'react';
import { View, ScrollView, ActivityIndicator, BackHandler } from 'react-native';
import Container from '../../components/Basic/Container';
import Header from '../../components/Headers/Header';
import { useRoute } from '@react-navigation/native';
import HorizontalLine from '../../components/Lines/HorizontalLine';
import { ProductImage, RowApart, styles, TextBox } from './styles';
import RText from '../../components/Basic/RText';
import { ProductsData } from '../../MockData';
import DualButton from '../../components/Buttons/DualButton';
import DeleteProduct from '../../components/Modals/DeleteProduct';
import AddIcon from '../../assets/icons/plusAccent.png';
import ProductsAPI from '../../api/products';
import { connect } from 'react-redux';

const Products = (props) => {
  const [showButton, setShowButton] = useState(true);
  if (props.route.params == null) {
    setShowButton(false);
    props.route.params = {
      title: props.user.user.brandName,
      _category: props.user.authorization,
    };
  }
  const { _category, title } = props.route.params;
  const [products, setProducts] = useState([]);
  const [deletingItem, setDeletingItem] = useState(null);
  const [reloadProducts, setReloadProducts] = useState(0);
  const [categoryProducts, setCategoryProducts] = useState('');

  function getProductsByCategory() {
    ProductsAPI.ProductsByCategoryID(_category).then((res) =>
      setCategoryProducts(res.data)
    );
  }

  function getProductsByRestuarantID() {
    ProductsAPI.ProductsByRestuarantID(_category).then((res) =>
      setCategoryProducts(res.data)
    );
  }

  useEffect(() => {
    if (props.route.params == null) {
      ProductsAPI.GetProducts({
        _id: props.user.user._id,
      })
        .then((res) => res.data)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err.response.data));
    } else {
      ProductsAPI.GetProducts({
        _id: props.user.user._id,
        _category: props.route.params._category,
      })
        .then((res) => res.data)
        .then((res) => setProducts(res.data))
        .catch((err) => console.log(err.response.data));
    }

    if (props.user.type == 'resturant') {
      getProductsByRestuarantID();
    } else {
      getProductsByCategory();
    }
  }, [reloadProducts]);

  const onAdd = () => {
    props.navigation.navigate('ProductDetail', {
      _category: _category,
    });
  };

  const onEdit = (item) => {
    props.navigation.navigate('ProductDetail', { item: item, edit: true });
  };

  const onDelete = (item) => {
    setDeletingItem(item);
  };

  const onOk = (item) => {
    // setProducts(
    //   products.filter((product) => product.title !== deletingItem.title)
    // );

    console.log(item);
    ProductsAPI.DeleteProductByID(
      item.name,
      item.description,
      item.quantity,
      item.price,
      item.avatar,
      item.extras,
      item._id
    )
      .then((res) => {
        setReloadProducts(Math.random());
        alert('Product Deleted successfully.');
      })
      .catch((err) => console.log(err));

    setDeletingItem(null);
  };

  const { params } = useRoute();

  return (
    <Container>
      {showButton ? (
        <Header
          title={params && params.title ? params.title : 'Products'}
          onBackPress={() => props.navigation.goBack()}
          rightIcon={AddIcon}
          onRightPress={onAdd}
        />
      ) : (
        <Header
          title={params && params.title ? params.title : 'Products'}
          onBackPress={() => props.navigation.goBack()}
          rightIcon={AddIcon}
        />
      )}
      <ScrollView>
        {products.map((item, index) => (
          <View key={index}>
            <RowApart>
              <ProductImage source={{ uri: item.avatar }} />
              <TextBox>
                <RText style={styles.title}>{item.name}</RText>
                <RText style={{ fontSize: 2.5 }}>{item.description}</RText>
              </TextBox>
              <DualButton
                firstTitle={'Edit'}
                secondTitle={'Del'}
                onFirstPress={() => onEdit(item)}
                onSecondPress={() => onOk(item)}
                style={styles.dualButton}
              />
            </RowApart>
            <HorizontalLine />
          </View>
        ))}
        {categoryProducts.data != null ? (
          categoryProducts.data.map((item, index) => (
            <View key={index}>
              <RowApart>
                <ProductImage source={{ uri: item.avatar }} />
                <TextBox>
                  <RText style={styles.title}>{item.name}</RText>
                  <RText style={{ fontSize: 2.5 }}>{item.description}</RText>
                </TextBox>
                <DualButton
                  firstTitle={'Edit'}
                  secondTitle={'Del'}
                  onFirstPress={() => onEdit(item)}
                  onSecondPress={() => onOk(item)}
                  style={styles.dualButton}
                />
              </RowApart>
              <HorizontalLine />
            </View>
          ))
        ) : (
          <View style={{ marginTop: 20 }}>
            <ActivityIndicator size='large' color='#ffffff' />
          </View>
        )}
      </ScrollView>
      {deletingItem !== null && (
        <DeleteProduct
          visible={true}
          item={deletingItem}
          onClose={() => setDeletingItem(null)}
          // onOk={onOk(categoryProducts.data)}
        />
      )}
    </Container>
  );
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};
export default connect(mapStateToProps, null)(Products);
