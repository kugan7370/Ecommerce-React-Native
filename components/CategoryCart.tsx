import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { RFPercentage } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface CatCartProps {
  cartData: {
    id: number;
    image: any;
    title: string;
    price: number;
    basePrice: number;
    rating: number;
  };
}

const CategoryCart = ({ cartData }: CatCartProps) => {
  return (
    <View style={styles.cartContainer}>
      <View style={styles.imageContainer}>
        <Image source={cartData.image} style={styles.CartImage} />
        <View style={styles.badge}>
          <Text style={styles.CartTitle}>Coats</Text>
        </View>
        <View style={styles.cancelBadge}>
          {/* remove icon */}
          <Ionicons name="heart" size={16} color="white" />
        </View>
      </View>
    </View>
  );
};

export default CategoryCart;

const styles = StyleSheet.create({
  cartContainer: {
    width: "50%",
    marginVertical: hp("1%"),
    paddingHorizontal: wp("1%"),
    
  },
  imageContainer: {
    width: "100%",
    height: 200,
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
    top: 8,
    right: 8,
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
    fontSize: RFPercentage(2),
    fontWeight: "bold",
    textAlign: "center",
  },
});
