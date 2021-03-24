import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  Image,
} from 'react-native';
import Container from '../../components/Basic/Container';
import Header from '../../components/Headers/Header';
import HorizontalLine from '../../components/Lines/HorizontalLine';
import { ProductImage, RowApart, styles, SubRow, TextBox, Row } from './styles';
import {
  RightAligned,
  Row as NewRow,
  RowApart as NewRowApart,
  styles as NewStyles,
} from '../orders/styles';
import RText from '../../components/Basic/RText';
import Button from '../../components/Buttons/Button/Button';
import AddIcon from '../../assets/icons/plusAccent.png';
import { wp } from '../../helpers/Responsiveness';
import { InputField } from '../../../customer/components/Basic/InputField';
import { Colors } from '../../config/Theme';
import ResponsiveText from '../../components/ResponsiveText';
import ImagePicker from 'react-native-image-picker';
import CategoryAPI from '../../api/category';
import PayloadAPI from '../../../api/Image';
import { connect } from 'react-redux';
import DualButton from '../../components/Buttons/DualButton';
import RoundedButton from '../../components/Buttons/RoundedButton/Button';
import OrderList from '../../components/OrderList';
import VerticalLine from '../../components/Lines/VerticalLine';
import RestaurantExternal from '../../../restaurant/api/restaurants';

const options = {
  title: 'Upload Photo',
  chooseFromLibraryButtonTitle: 'Choose photo from Library',
  mediaType: 'photo',
  includeBase64: false,
  maxHeight: 200,
  maxWidth: 200,
  storageOptions: {
    privateDirectory: true,
  },
};

const AllOrders = (props) => {
  const [categories, setAllCategories] = useState([]);
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [categoryName, setCategoryName] = useState();
  const [categoryImage, setCategoryImage] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [fetchAgain, setFetchAgain] = useState(0);
  const [loadiing, setLoading] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [orders, setOrders] = useState('');
  const [detailsIndex, setDetailsIndex] = useState(0);

  // console.log('itemmmmmmmmmmmmmmmm',test.name)

  const onCategoryPress = (item) => {
    props.navigation.navigate('Products', {
      title: item.title,
      _category: item._id,
    });
  };

  useEffect(() => {
    setLoading(true);
    // CategoryAPI.GetAllCategories(props.user.user._id)
    //   .then((res) => res.data)
    //   .then((res) => {
    //     setAllCategories(res.data.categories);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setErrorMessage('Something went wrong');
    //   });
    CategoryAPI.GetOrdersByRestuarantID(props.user.authorization)
      .then((res) => {
        console.log('Orders fetched', JSON.stringify(res.data));
        setAllCategories(res.data.data.orders);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [fetchAgain]);

  const uploadImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        console.log({
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });
        setCategoryImage({
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });
      }
    });
  };

  const onAddCategory = () => {
    if (!Object.keys(categoryImage).length) {
      setErrorMessage('Category image missing');
      return;
    }
    if (!categoryName.length) {
      setErrorMessage('Invalid category name');
      return;
    }

    PayloadAPI.UploadImage(categoryImage)
      .then((res) => res.data)
      .then((image) => {
        CategoryAPI.PostCategory(props.user.user._id, categoryName, image.file)
          .then((res) => res.data)
          .then((category) => {
            setFetchAgain(Math.random());
            console.log('category posted', { category });
          })
          .catch((err) => {
            console.log('err', err.response.data);
            setErrorMessage(err.response.data.message);
          });
      })
      .catch((err) => {
        console.log(err.response.data);
        setErrorMessage(err.response.data.message);
      })
      .finally(() => {
        alert('category added');
        setAddCategoryModal(false);
      });
  };

  const onEdit = (item) => {
    setModalData(item);
    setAddCategoryModal(true);
    setEditModal(true);
  };

  function Capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  const cancelOrder = (orderID) => {
    let status = 'cancelled';
    RestaurantExternal.UpdateOrderStatus(orderID, status)
      .then((res) => {
        console.log('Order Cancelled');
        setShowDetails(false);
        setFetchAgain(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const markDelivered = (orderID) => {
    let status = 'delivered';
    RestaurantExternal.UpdateOrderStatus(orderID, status)
      .then((res) => {
        console.log('Order Delivered');
        setShowDetails(false);
        setFetchAgain(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const acceptOrder = (orderID) => {
    let status = 'accepted';
    RestaurantExternal.UpdateOrderStatus(orderID, status)
      .then((res) => {
        console.log('Order Accepted');
        setShowDetails(false);
        setFetchAgain(Math.random());
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <Container>
      <Header
        title={'All Orders'}
        onBackPress={props.navigation.goBack}
        // rightIcon={AddIcon}
        onRightPress={() => setAddCategoryModal(true)}
      />
      {loadiing ? (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
          <ActivityIndicator color={'white'} size={'large'} />
        </View>
      ) : !categories.length ? (
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          {!errorMessage ? (
            <>
              {!categories.length ? (
                <ResponsiveText style={{ color: 'lightgrey' }}>
                  No data
                </ResponsiveText>
              ) : (
                <ActivityIndicator size='large' color='#ffffff' />
              )}
            </>
          ) : (
            <ResponsiveText>{errorMessage}</ResponsiveText>
          )}
        </View>
      ) : (
        <View>
          {showDetails ? (
            <View>
              <OrderList noAccentText orders={orders} />
              <NewRowApart style={NewStyles.verticalPadding}>
                <NewRowApart style={NewStyles.noPadding}>
                  <RightAligned>
                    {/* <RText style={{ ...styles.smallText }}>Discount</RText>
                    <RText style={styles.smallText}>Tax GST</RText> */}
                    <RText style={NewStyles.smallText}>Subtotal</RText>
                    <RText>Total</RText>
                  </RightAligned>
                  <View style={NewStyles.horizontalPadding}>
                    <VerticalLine />
                  </View>
                  <RightAligned>
                    <RText style={NewStyles.smallText}>${orders.total}</RText>
                    <RText>${orders.total}</RText>
                  </RightAligned>
                </NewRowApart>
              </NewRowApart>
              <HorizontalLine />
              <NewRow style={{ paddingVertical: 15 }}>
                <RText style={NewStyles.accentText}>
                  Touch the name of the product to show tooltip for speicial
                  instructions
                </RText>
              </NewRow>
              {orders.status === 'pending' && (
                <NewRow>
                  <RoundedButton
                    red
                    title={'Cancel Order'}
                    textStyle={{ color: 'white' }}
                    style={[NewStyles.buttons, { backgroundColor: '#FF1111' }]}
                    onPress={() => cancelOrder(orders._id)}
                  />
                  <RoundedButton
                    title={'Accept Order'}
                    style={[NewStyles.buttons, { backgroundColor: '#C9C9C9' }]}
                    onPress={() => acceptOrder(orders._id)}
                  />
                </NewRow>
              )}
              {orders.status === 'accepted' && (
                <NewRow>
                  <RoundedButton
                    red
                    title={'Mark Delivered'}
                    textStyle={{ color: 'black' }}
                    style={[NewStyles.buttons, { backgroundColor: '#D27D19' }]}
                    onPress={() => markDelivered(orders._id)}
                  />
                </NewRow>
              )}
              <View style={{ marginLeft: 20 }}>
                <RoundedButton
                  title={'Hide Details'}
                  style={[NewStyles.buttons, { backgroundColor: '#D27D19' }]}
                  onPress={() => setShowDetails(false)}
                />
              </View>
            </View>
          ) : (
            <ScrollView>
              {categories.map((item, index) => (
                <View style={{ flex: 1 }} key={index}>
                  <RowApart>
                    <SubRow>
                      <TextBox>
                        <RText style={styles.title}>ID : {item.alias}</RText>
                      </TextBox>
                      <SubRow>
                        <TextBox style={{ marginRight: 15 }}>
                          {/* <RText style={{ color: Colors.Accent }}>Pending</RText> */}
                        </TextBox>
                        <TextBox>
                          <RText style={styles.title}>
                            Total : {item.total}$
                          </RText>
                        </TextBox>
                      </SubRow>
                    </SubRow>
                    <SubRow>
                      <TextBox>
                        <RText>Total Items : {item.products.length}</RText>
                      </TextBox>
                      <RText>{Capitalize(item.status)}</RText>
                      <Button
                        title={'View Details'}
                        inverted
                        style={styles.viewButton}
                        onPress={() => {
                          setOrders(item);
                          setDetailsIndex(index);
                          setShowDetails(true);
                        }}
                      />
                    </SubRow>
                  </RowApart>
                  <HorizontalLine />
                </View>
              ))}
            </ScrollView>
          )}
        </View>
      )}

      {addCategoryModal && (
        <Modal
          animationType='slide'
          transparent={true}
          visible={addCategoryModal}
          onRequestClose={() => {}}
        >
          <View style={stylesSheet.centeredView}>
            <View style={stylesSheet.modalView}>
              <ResponsiveText style={{ color: '#FFF', fontWeight: 'bold' }}>
                {editModal ? 'Update Category' : 'Add New Category'}
              </ResponsiveText>
              <View style={stylesSheet.modalInputContainer}>
                <TouchableOpacity
                  style={stylesSheet.imagePicker}
                  onPress={uploadImage}
                >
                  <Image
                    style={stylesSheet.image}
                    source={
                      categoryImage && categoryImage.uri
                        ? { uri: categoryImage.uri }
                        : editModal
                        ? {
                            uri: modalData.avatar,
                          }
                        : require('../../assets/icons/camera.png')
                    }
                  />
                </TouchableOpacity>
                <InputField
                  value={categoryName}
                  onChangeText={(e) => setCategoryName(e)}
                  style={stylesSheet.addCategoryInputField}
                  placeholder={'Category Name'}
                />
                <ResponsiveText
                  style={{
                    color: 'red',
                    textAlign: 'center',
                    alignSelf: 'center',
                  }}
                >
                  {errorMessage}
                </ResponsiveText>
                <Button
                  title={editModal ? 'Update' : 'Add'}
                  inverted
                  onPress={onAddCategory}
                  style={{
                    paddingVertical: 8,
                  }}
                />
              </View>
              <TouchableOpacity
                style={{
                  ...stylesSheet.openButton,
                  backgroundColor: 'red',
                }}
                onPress={() => {
                  setAddCategoryModal(!addCategoryModal);
                  setEditModal(false);
                  setCategoryName('');
                  setCategoryImage({});
                }}
              >
                <Text style={stylesSheet.textStyle}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      )}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(AllOrders);
