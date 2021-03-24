import React, { useEffect } from 'react';
import { ScrollView, View } from 'react-native';
import { FullRow, RowApart, styles } from './styles';
import RText from '../Basic/RText';
import HorizontalLine from '../Lines/HorizontalLine';
import { OrdersData } from '../../MockData';
import Container from '../Basic/Container';
import { Tooltip, Text } from 'react-native-elements';

const OrderList = (props) => {
  useEffect(() => {
    if (props.orders != null) {
      console.log(
        props.orders.products[0].product ? props.orders.products[0].product : ''
      );
    }
  }, []);
  return (
    <View style={{ marginTop: 5 }}>
      {props.orders != null ? (
        <RowApart style={styles.greyBar}>
          <RText style={styles.mediumText}>
            Today at: {props.orders.createdAt.substring(11, 16)}
          </RText>
          <View>
            <RText style={{ ...styles.mediumText, ...styles.rightText }}>
              Order id: {props.orders.alias}
            </RText>
            <RText style={styles.mediumText}>
              Total: ${props.orders.total}
            </RText>
          </View>
        </RowApart>
      ) : null}
      {!props.noAccentText && (
        <RowApart>
          <RText style={styles.accentText}>Item</RText>
          <RText style={styles.accentText}>Quantity</RText>
          <RText style={styles.accentText}>Price</RText>
        </RowApart>
      )}
      <HorizontalLine style={{ opacity: 0.8 }} />
      {props.orders != null &&
        props.orders.products.map((item, index) => (
          <RowApart style={styles.verticalPadding}>
            <FullRow>
              <Tooltip
                width={200}
                height={100}
                popover={
                  <Text>
                    {props.orders.products[index].specialInstructions
                      ? props.orders.products[index].specialInstructions
                      : 'No Special Instructions available for this product'}
                  </Text>
                }
                pointerColor={'#C9C9C9'}
                backgroundColor={'#C9C9C9'}
                overlayColor={'rgba(10, 10, 10, 0.95)'}
                // highlightColor={'#D27D14'}
              >
                <RText style={styles.smallText}>
                  {props.orders.products[index].product
                    ? props.orders.products[index].product.name
                    : 'Name not defined'}
                </RText>
              </Tooltip>
            </FullRow>
            <FullRow>
              <RowApart style={{ paddingHorizontal: 0 }}>
                <RText style={styles.smallText}>
                  Qty:{' '}
                  {props.orders.products[index].product
                    ? props.orders.products[index].product.quantity
                    : '0'}
                </RText>
                <RText style={styles.smallText}>
                  $.00{' '}
                  {props.orders.products[index].product
                    ? props.orders.products[index].product.price
                    : '0'}
                </RText>
              </RowApart>
            </FullRow>
          </RowApart>
        ))}
      <HorizontalLine />
    </View>
  );
};

export default OrderList;
