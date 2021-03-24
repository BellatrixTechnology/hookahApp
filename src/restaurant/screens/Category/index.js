import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Modal,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  BackHandler,
  Image,
} from 'react-native';
import Container from '../../components/Basic/Container';
import Header from '../../components/Headers/Header';
import HorizontalLine from '../../components/Lines/HorizontalLine';
import { ProductImage, RowApart, styles, TextBox } from './styles';
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

const Category = (props) => {
  const [categories, setAllCategories] = useState([]);
  const [addCategoryModal, setAddCategoryModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [modalData, setModalData] = useState({});
  const [categoryName, setCategoryName] = useState();
  const [categoryImage, setCategoryImage] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [fetchAgain, setFetchAgain] = useState(0);
  const [loadiing, setLoading] = useState(false);

  const onCategoryPress = (item) => {
    props.navigation.navigate('Products', {
      title: item.title,
      _category: item._id,
    });
  };

  useEffect(() => {
    setLoading(true);
    CategoryAPI.GetAllCategories(props.user.user._id)
      .then((res) => res.data)
      .then((res) => {
        setAllCategories(res.data.categories);
        setLoading(false);
      })
      .catch((err) => {
        // setErrorMessage('Something went wrong');
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

  const EditCategory = () => {
    CategoryAPI.EditCategoryInfo(categoryName, modalData.avatar, modalData._id);
    setFetchAgain(Math.random());
    setAddCategoryModal(false);
  };

  const DeleteCategory = () => {
    CategoryAPI.DeleteCategoryByID(
      categoryName,
      modalData.avatar,
      modalData._id
    );
    setFetchAgain(Math.random());
    setAddCategoryModal(false);
  };

  return (
    <Container>
      <Header
        title={'Category'}
        onBackPress={props.navigation.goBack}
        rightIcon={AddIcon}
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
        <ScrollView>
          {categories.map((item, index) => (
            <View key={index}>
              <RowApart>
                <ProductImage source={{ uri: item.avatar }} />
                <TextBox>
                  <RText style={styles.title}>{item.name}</RText>
                </TextBox>
                {/*<Button*/}
                {/*  title={'View All'}*/}
                {/*  inverted*/}
                {/*  style={styles.viewButton}*/}
                {/*  onPress={() => onCategoryPress(item)}*/}
                {/*/>*/}
                <DualButton
                  firstTitle={'Edit'}
                  secondTitle={'View All'}
                  onFirstPress={() => onEdit(item)}
                  onSecondPress={() => onCategoryPress(item)}
                  style={styles.dualButton}
                />
              </RowApart>
              <HorizontalLine />
            </View>
          ))}
        </ScrollView>
      )}

      {/*{!categories.length ? (*/}
      {/*  <View*/}
      {/*    style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}*/}
      {/*  >*/}
      {/*    {!errorMessage ? (*/}
      {/*      <>*/}
      {/*        {!categories.length ? (*/}
      {/*          <View />*/}
      {/*        ) : (*/}
      {/*          <ActivityIndicator size="large" color="#ffffff" />*/}
      {/*        )}*/}
      {/*      </>*/}
      {/*    ) : (*/}
      {/*      <ResponsiveText>{errorMessage}</ResponsiveText>*/}
      {/*    )}*/}
      {/*  </View>*/}
      {/*) : (*/}
      {/*  <ScrollView>*/}
      {/*    {categories.map((item, index) => (*/}
      {/*      <View key={index}>*/}
      {/*        <RowApart>*/}
      {/*          <ProductImage source={{ uri: item.avatar }} />*/}
      {/*          <TextBox>*/}
      {/*            <RText style={styles.title}>{item.name}</RText>*/}
      {/*          */}
      {/*          <DualButton*/}
      {/*            firstTitle={'Edit'}*/}
      {/*            secondTitle={'View All'}*/}
      {/*            // onFirstPress={() => onEdit(item)}*/}
      {/*            onSecondPress={() => onCategoryPress(item)}*/}
      {/*            style={styles.dualButton}*/}
      {/*          />*/}
      {/*        </RowApart>*/}
      {/*        <HorizontalLine />*/}
      {/*      </View>*/}
      {/*    ))}*/}
      {/*  </ScrollView>*/}
      {/*)}*/}

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
                  {editModal ? (
                    <Image
                      style={stylesSheet.image}
                      source={{ uri: modalData.avatar }}
                    />
                  ) : (
                    <Image
                      style={stylesSheet.addImage}
                      tintColor={'#fff'}
                      source={require('../../assets/icons/cameraIcon.png')}
                    />
                  )}
                </TouchableOpacity>
                <InputField
                  value={categoryName}
                  onChangeText={(e) => {
                    setCategoryName(e);
                    modalData.name = categoryName;
                  }}
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
                {/* <Button
                  title={editModal ? 'Update' : 'Add'}
                  inverted
                  onPress={editModal ? EditCategory : onAddCategory}
                  style={{
                    paddingVertical: 8,
                  }}
                /> */}

                {editModal ? (
                  <View>
                    <Button
                      title={'Update'}
                      inverted
                      onPress={EditCategory}
                      style={{
                        paddingVertical: 8,
                      }}
                    />
                    <Button
                      title={'Delete'}
                      inverted
                      onPress={DeleteCategory}
                      style={{
                        paddingVertical: 8,
                      }}
                    />
                  </View>
                ) : (
                  <View>
                    <Button
                      title={'Add'}
                      inverted
                      onPress={onAddCategory}
                      style={{
                        paddingVertical: 8,
                      }}
                    />
                  </View>
                )}
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

const stylesSheet = {
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
    shadowColor: '#FFF',
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
  addImage: {
    height: wp('13'),
    width: wp('13'),
    resizeMode: 'contain',
    borderRadius: wp('13'),
  },
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(Category);
