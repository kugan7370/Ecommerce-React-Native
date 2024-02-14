import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

interface MyCartProps {
    item: {
        id: number;
        image: any;
        title:string;
        price: number;
        basePrice:number;
        rating: number;
    };
    }


const MyCart = ({item}:MyCartProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={item.image}
            style={styles.image}
          />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.title}>Blue Hand Block Tiered Dress</Text>
          <View style={styles.priceContainer}>
            <Text style={styles.price}>$ 2500</Text>
            <Text style={styles.discount}>$ 3000</Text>
            <Text style={styles.rating}>4.5</Text>
          </View>
          <Text style={styles.remove}>Free Delivery</Text>

           {/* increment decrement */}
      <View style={styles.incrementContainer}>
        <TouchableOpacity style={styles.incrementBtn}>
          <Text style={styles.incrementText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.count}>1</Text>
        <TouchableOpacity style={styles.incrementBtn}>
          <Text style={styles.incrementText}>+</Text>
        </TouchableOpacity>
      </View>
        </View>
      </View>
     
    </View>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: wp("2%"),
    paddingHorizontal: wp("4%"),
    borderRadius:wp("4%"),
    marginVertical: hp("1%"),
  },
  innerContainer: {
    flexDirection: "row",
    // alignItems: "center",
 
  },
  imageContainer: {
    width: wp("35%"),
    height: hp("20%"),
    borderRadius: 10,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
  },
  textContainer: {
    marginLeft: wp("3%"),
    flex: 1,
    gap: 5,
  },
  title: {
    fontSize: RFPercentage(2.5),
    fontWeight: "bold",
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  price: {
    fontSize: RFPercentage(2.2),
    fontWeight: "bold",
  },
  discount: {
    fontSize: RFPercentage(2.2),
    fontWeight: "bold",
    textDecorationLine: "line-through",
    marginLeft: wp("3%"),
  },
  rating: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f39c12",
    marginLeft: 10,
  },
  remove: {
    fontSize: 16,
    fontWeight: "bold",
    color: "green",
    marginTop: 5,
  },
  incrementContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
  incrementBtn: {
    backgroundColor: "#020202",
    width: wp("8%"),
    height: wp("8%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp("8%"),
  },
  incrementText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  count: {
    fontSize: 18,
    fontWeight: "bold",
    marginHorizontal: 10,
  },
});
