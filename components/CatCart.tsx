import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


interface CatCartProps {
    cartData: {
        id: number;
        image: any;
        title:string;
        price: number;
        basePrice:number;
        rating: number;
    };
    }



const CatCart = ({cartData}:CatCartProps) => {
  return (
    <View style={styles.CartContainer}>
      <View style={styles.imageContainer}>
        <Image
          source={cartData.image}
          style={styles.CartImage}
        />
        <View style={styles.badge}>
          <Text style={styles.CartTitle}>Add to Cart</Text>
        </View>
        <View style={styles.cancelBadge}>
         {/* remove icon */}
         <Ionicons name="remove" size={24} color="white" />

        </View>
      </View>
      <Text style={styles.productName}>Bluebell Hand Block</Text>
      <View style={styles.CountContainer}>
        <Text style={styles.DiscoutPrice}>$40</Text>

        <Text style={styles.basePrice}>$30</Text>
        <Text style={styles.rating}>4.3 ✨</Text>
      </View>
    </View>
  );
};

export default CatCart;

const styles = StyleSheet.create({
  CartContainer: {
   margin: wp("1%"),
   gap: wp("2%"),
    // width: wp("46%"),
    height: hp("35%"),
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  imageContainer: {
    width: wp("45%"),
    height: hp("25%"),
    position: "relative",
    overflow: "hidden",
    borderRadius: wp("5%"),
  },
  CartImage: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  cancelBadge: {
    position: "absolute",
    top: 4,
    right: 4,
    backgroundColor: "black",
    opacity: 0.3,
    padding: wp("1%"),
    borderRadius: wp("5%"),
  },
  badge: {
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "black",
    opacity: 0.5,
    padding: wp("3%"),
    borderRadius: wp("5%"),
  },
  CartTitle: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  productName: {
    fontWeight: "bold",
    fontSize: wp("4%"),
  },
  CountContainer: {
    flexDirection: "row",
    gap: wp("2%"),
  },
  DiscoutPrice: {
    fontWeight: "bold",
  },
  basePrice: {
    textDecorationLine: "line-through",
    color: "grey",
  },
  rating: {
    marginLeft: "auto",
  },
});
