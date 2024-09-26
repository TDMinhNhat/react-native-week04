import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const Order = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: 'white',
          display: 'flex',
          alignItems: 'center',
        }}>
        <View style={styles.productContainer}>
          <Image
            source={require('./assets/tich_phan.jpg')} // Replace with actual product image
            style={styles.productImage}
          />
          <View style={styles.productDetails}>
            <Text style={styles.productTitle}>
              Nguyên hàm, Tích phân và ứng dụng
            </Text>
            <Text style={styles.productSubtitle}>
              Cung cấp bởi Tiki Trading
            </Text>
            <View style={styles.priceContainer}>
              <Text style={styles.productPrice}>141.800 đ</Text>
              <Text style={styles.originalPrice}>141.800 đ</Text>
            </View>
            <View style={styles.quantityContainer}>
              <TouchableOpacity style={styles.quantityButton}>
                <Icon name="minus" size={16} color="#000" />
              </TouchableOpacity>
              <Text style={styles.quantityText}>1</Text>
              <TouchableOpacity style={styles.quantityButton}>
                <Icon name="plus" size={16} color="#000" />
              </TouchableOpacity>
            </View>
            <TouchableOpacity>
              <Text style={styles.buyLaterText}>Mua sau</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.discountContainer}>
          <Text style={styles.discountLabel}>Mã giảm giá đã lưu</Text>
          <TouchableOpacity>
            <Text style={styles.discountLink}>Xem tại đây</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.discountInputContainer}>
          <TouchableOpacity style={styles.discountButton}>
            <Text style={styles.discountButtonText}>Mã giảm giá</Text>
          </TouchableOpacity>
          <TextInput
            style={styles.discountInput}
            placeholder="Nhập mã"
            placeholderTextColor="#000"
          />
          <TouchableOpacity style={styles.applyButton}>
            <Text style={styles.applyButtonText}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.giftCardContainer}>
        <Text style={styles.giftCardText}>
          Bạn có phiếu quà tặng Tiki/Got it?/Urbox?
        </Text>
        <TouchableOpacity>
          <Text style={styles.giftCardLink}>Nhập tại đây</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Tạm tính</Text>
        <Text style={styles.subtotalPrice}>141.800 đ</Text>
      </View>

      <View style={{backgroundColor: "white", display: "flex", alignItems: "center", position: "absolute", bottom: 0, width: "100%"}}>
        <View style={styles.totalContainer}>
          <Text style={styles.totalText}>Thành tiền</Text>
          <Text style={styles.totalPrice}>141.800 đ</Text>
        </View>

        <TouchableOpacity style={styles.checkoutButton}>
          <Text style={styles.checkoutButtonText}>TIẾN HÀNH ĐẶT HÀNG</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#c4c4c4',
  },
  productContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  productImage: {
    width: 100,
    height: 150,
    marginRight: 10,
  },
  productDetails: {
    flex: 1,
  },
  productTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  productSubtitle: {
    fontSize: 14,
    color: '#888',
    marginVertical: 5,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  productPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E53935',
  },
  originalPrice: {
    fontSize: 14,
    color: '#888',
    textDecorationLine: 'line-through',
    marginLeft: 10,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  quantityButton: {
    padding: 5,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  quantityText: {
    fontSize: 16,
    marginHorizontal: 10,
  },
  buyLaterText: {
    color: '#1E90FF',
    fontSize: 14,
  },
  discountContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  discountLabel: {
    fontSize: 14,
    color: '#888',
  },
  discountLink: {
    fontSize: 14,
    color: '#1E90FF',
  },
  discountInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 30,
  },
  discountButton: {
    backgroundColor: '#FFD700',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  discountButtonText: {
    fontSize: 14,
    color: '#000',
  },
  discountInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
  applyButton: {
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
    marginLeft: 10,
  },
  applyButtonText: {
    color: '#FFF',
    fontSize: 14,
  },
  giftCardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: 'white',
  },
  giftCardText: {
    fontSize: 13,
    fontWeight: "bold"
  },
  giftCardLink: {
    fontSize: 13,
    fontWeight: "bold",
    color: '#1E90FF',
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
    marginTop: 20,
    backgroundColor: 'white',
  },
  subtotalText: {
    fontSize: 20,
    fontWeight: "bold"
  },
  subtotalPrice: {
    fontSize: 20,
    color: '#E53935',
    fontWeight: "bold"
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#FFF',
    width: "100%",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  totalPrice: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#E53935',
  },
  checkoutButton: {
    backgroundColor: '#E53935',
    padding: 15,
    alignItems: 'center',
    width: "90%",
    marginBottom: 10
  },
  checkoutButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Order;
