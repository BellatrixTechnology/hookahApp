import React, { useState, useEffect } from 'react';
import { ScrollView, Image, BackHandler } from 'react-native';
import Container from '../../components/Basic/Container';
import Header from '../../components/Headers/Header';
import HorizontalLine from '../../components/Lines/HorizontalLine';
import {
  Content,
  styles,
  ExtraBox,
  ExtraItem,
  ExtraText,
  CameraIcon,
  CameraCircle,
  MoreIcon,
  DummyView,
  DummyImage,
} from './styles';
import RText from '../../components/Basic/RText';
import Button from '../../components/Buttons/Button/Button';
import { useRoute } from '@react-navigation/native';
import { TouchableOpacity, TextInput, View } from 'react-native';
import BoxInput from '../../components/BoxInput';
import Camera from '../../assets/icons/camera.png';
import PlusIcon from '../../assets/icons/plus.png';
import { Extras } from '../../MockData';
import ImagePicker from 'react-native-image-picker';
import dummyimage from '../../assets/icons/dummyimage.png';
import ProductAPI from '../../api/products';
import { connect } from 'react-redux';
import PayloadAPI from '../../../api/Image';
import { wp } from '../../helpers/Responsiveness';
import Products from '../Products';
import ProductsAPI from '../../api/products';

const options = {
  title: 'Upload Photo',
  chooseFromLibraryButtonTitle: 'Choose photo from Library',
};

const ProductDetail = (props) => {
  useEffect(() => {
    if (params.edit == null) {
      params.edit = false;
    }
    console.log(params.item);
  }, []);

  const { params } = useRoute();
  const [extendedView, setExtendedView] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [productName, setProductName] = useState(
    params.edit ? params.item.name : ''
  );
  const [description, setDescription] = useState(
    params.edit ? params.item.description : ''
  );
  let initialQuantity = 22;
  const [quantity, setQuantity] = useState(
    params.edit ? params.item.quantity : ''
  );
  const [price, setPrice] = useState(params.edit ? params.item.price : '');
  const [input, setInput] = useState('');
  const [extras, setExtras] = useState([]);
  let APIextras = [];
  const [image, setImage] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [oldExtras, setOldExtras] = useState('Fries $2');

  const onSavePress = () => {
    setLoading(true);
    if (!Object.keys(image).length) {
      setErrorMessage('Category image missing');
      return;
    } else if (!productName.length) {
      setErrorMessage('Invalid category name');
      return;
    } else if (!productName.length) {
      errorMessage('Product name required.');
    } else if (!description.length) {
      errorMessage('Product description required.');
    } else if (!quantity.length) {
      errorMessage('Product quantity required.');
    } else {
      PayloadAPI.UploadImage(image)
        .then((res) => res.data)
        .then((res) => {
          ProductAPI.PostProduct({
            _id: props.user.user._id,
            _category: props.route.params._category,
            name: productName,
            description,
            quantity,
            price,
            avatar: res.file,
            extras,
          })
            .then((res) => res.data)
            .then((res) => {
              console.log(res.data);
              alert('Product added successfully.');
              setLoading(false);
              props.navigation.navigate('Products');
            })
            .catch((err) => {
              console.log(err.response.data);
              setErrorMessage(err.response.data.message);
            })
            .finally(() => {
              setLoading(true);
            });
        })
        .catch((err) => console.log(err.response.data));
    }
  };

  const onUpdate = () => {
    ProductsAPI.UpdateProductByID(
      productName,
      description,
      quantity,
      price,
      image.uri,
      APIextras,
      params.item._id
    )
      .then((res) => {
        alert('Product Updated successfully.');
        setLoading(false);
        props.navigation.navigate('Products');
      })
      .catch((err) => console.log(err));
  };

  const onExtraPress = (item) => {
    if (!selectedExtras.includes(item)) {
      setSelectedExtras([...selectedExtras, item]);
    } else {
      setSelectedExtras(selectedExtras.filter((e) => e !== item));
    }
  };

  const onMorePress = () => {
    setExtendedView(true);
  };

  const uploadImage = () => {
    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else {
        setImage({
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });
      }
    });
  };

  const addExtras = (input) => {
    var item = extras;
    item.push(input.text);
    setExtras(item);
    APIextras.push({ id: Math.random(), name: item, price: Math.random() });
    setInput('');
  };

  const deleteExtras = (id) => {
    const updatedValue = extras.filter((item) => item !== id);
    setExtras(updatedValue);
    APIextras.push({
      id: Math.random(),
      name: updatedValue,
      price: Math.random(),
    });
  };

  return (
    <Container>
      <Header
        title={params ? 'Edit Product' : 'Add new Product'}
        onBackPress={props.navigation.goBack}
      />
      <ScrollView>
        <Content>
          <DummyView>
            {image && image.uri ? (
              <DummyImage
                source={{ uri: image.uri }}
                height={'100%'}
                width={'140px'}
              />
            ) : params.edit ? (
              <DummyImage
                source={{ uri: params.item.avatar }}
                height={'100%'}
                width={'100%'}
                style={{ resizeMode: 'contain' }}
              />
            ) : (
              <DummyImage
                source={require('../../assets/icons/camera.png')}
                height={'20%'}
                width={'20%'}
                style={{ resizeMode: 'contain' }}
              />
            )}
          </DummyView>

          <CameraCircle onPress={uploadImage}>
            <CameraIcon source={Camera} />
          </CameraCircle>
          <RText
            style={{
              color: 'red',
              alignSelf: 'center',
              marginBottom: 10,
              fontSize: 3,
            }}
          >
            {errorMessage}
          </RText>
          <RText style={styles.addImageText}>Add product thumbnail</RText>
          <BoxInput
            title={'Product name'}
            placeholder={'Product name here...'}
            value={productName}
            onChangeText={(e) => setProductName(e)}
          />
          <BoxInput
            textAlignVertical={'top'}
            title={'Description'}
            placeholder={'Add description here...'}
            style={styles.descriptionBox}
            multiline
            numberOfLines={3}
            value={description}
            onChangeText={(e) => setDescription(e)}
          />
          <BoxInput
            title={'Quantity'}
            placeholder={
              quantity === '' ? 'Add quantity here... ' : `${quantity}`
            }
            value={quantity}
            keyboardType={'numeric'}
            onChangeText={(e) => setQuantity(e)}
          />
          <BoxInput
            title={'Price ($)'}
            placeholder={price === '' ? 'Add price here... ' : `${price}`}
            value={price}
            keyboardType={'numeric'}
            onChangeText={(e) => setPrice(e)}
          />
          <BoxInput
            title={'Extras'}
            placeholder={`${oldExtras}`}
            value={extras}
            onChangeText={(e) => setExtras}
          />

          {!extendedView ? (
            <TouchableOpacity onPress={onMorePress}>
              <MoreIcon source={PlusIcon} />
            </TouchableOpacity>
          ) : (
            <>
              <HorizontalLine />
              <BoxInput
                placeholder={'Add Extra things here...'}
                value={input}
                onChangeText={(e) => setInput(e)}
                onSubmitEditing={(e) => {
                  addExtras(e.nativeEvent);
                  // onExtraPress(extras);
                }}
                style={{ marginBottom: wp(-1) }}
              />
              <RText style={styles.extraText}>Extras</RText>
              <ExtraBox>
                {extras.map((item, index) => {
                  // const selected = selectedExtras.includes(item);
                  return (
                    <ExtraItem
                    // selected={selected}
                    // onPress={() => onExtraPress(item)}
                    >
                      <TouchableOpacity
                        style={{
                          width: '100%',
                          alignItems: 'flex-end',
                          padding: 2,
                        }}
                        onPress={() => deleteExtras(item)}
                      >
                        <Image
                          source={require('../../assets/icons/cancel.png')}
                          style={{ height: 9, width: 9, tintColor: 'white' }}
                        />
                      </TouchableOpacity>
                      <ExtraText>{item}</ExtraText>
                    </ExtraItem>
                  );
                })}
              </ExtraBox>
            </>
          )}
          <Button
            loading={loading}
            style={styles.saveBtn}
            title={'Save and Update'}
            textStyle={styles.saveText}
            onPress={params.edit ? onUpdate : onSavePress}
          />
        </Content>
      </ScrollView>
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export default connect(mapStateToProps, null)(ProductDetail);
