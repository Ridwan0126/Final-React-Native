// import React from 'react';
// import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
// import {colors, fonts, numberWithCommas, responsiveWidth} from '../../../utils';
// import Tombol from '../Tombol';

// const CardProduct = ({products, navigation}) => {
//   console.log('PRODUCT CARD', products);
//   return (
//     <View key={products.id} style={styles.container}>
//       <Text style={styles.tittle}>{products.nama}</Text>
//       {/* <TouchableOpacity style={styles.card}> */}
//       {/* <Image source={{uri: Product.thumbnailURL}} style={styles.image} /> */}
//       {/* <View>
//           <Text style={styles.tittle}>{products.kamar[0]}</Text>
//           <Text style={styles.tittle}>{products.kamar[1]}</Text>
//           <Text style={styles.tittle}>{products.kamar[2]}</Text>
//           <Text style={styles.tittle}>{products.kamar[3]}</Text>
//           <Text style={styles.tittle}>{products.kamar[4]}</Text>
//           <Text style={styles.tittle}>{products.kamar[5]}</Text>
//           <Text style={styles.tittle}>{products.kamar[5]}</Text>
//         </View>
//       </TouchableOpacity> */}
//       {/* <Tombol
//         type="text"
//         tittle="Details"
//         padding={7}
//         onPress={() => navigation.navigate('ProductDetail', {products})}
//       /> */}
//     </View>
//   );
// };

// export default CardProduct;

// const styles = StyleSheet.create({
//   container: {
//     // marginBottom: 20,
//   },
//   image: {
//     width: 135,
//     height: 135,
//     alignItems: 'center',
//   },
//   tittle: {
//     fontFamily: fonts.primary.bold,
//     fontSize: 16,
//     textTransform: 'capitalize',
//     // marginRight: 10,
//     // textAlign: 'center',
//     marginBottom: 8,
//   },
//   card: {
//     // backgroundColor: colors.yellow,
//     width: responsiveWidth(290),
//     // alignItems: 'center',
//     padding: 10,
//     borderRadius: 10,
//     // justifyContent: 'space-between',
//     // marginBottom: 10,
//   },
//   bold: {
//     marginLeft: -20,
//     fontFamily: fonts.primary.regular,
//   },
// });
