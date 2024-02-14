import { View, Text, SafeAreaView, FlatList, Platform, StatusBar } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { multiCategory } from "@/data";
import { Colors } from "react-native/Libraries/NewAppScreen";

import { whishlistData } from "@/data";
import CatCart from "@/components/whishlistCart";

const whishlist = () => {
  return (
    <View style={styles.container}>
     {Platform.OS === 'android' && <StatusBar backgroundColor="#fff" barStyle="dark-content" />}
      <SafeAreaView>
      {/* header */}
      <View style={styles.headerContainer}>
        <View style={styles.headerInnerContainer}>
          <Text style={styles.headerTitle}>Whishlist</Text>
          <View style={styles.itemContainer}>
            <Text style={styles.itemText}>
              <Text style={styles.counts}>8</Text> Items
            </Text>
            <Text style={styles.itemText}>
              Total : <Text style={styles.counts}>$57</Text>
            </Text>
          </View>
        </View>
        <Ionicons name="search" size={30} color="black" />
      </View>

      {/* category */}

      <View style={styles.categroyMainContainer}>
        <FlatList
          data={multiCategory}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View
              style={
                item.id === 1
                  ? [styles.categoryContainer, styles.activeCategory]
                  : styles.categoryContainer
              }
            >
              <Text
                style={
                  item.id === 1
                    ? [styles.textContainer, styles.activeText]
                    : styles.textContainer
                }
              >
                {item.name}
              </Text>
            </View>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </View>

      {/* card section */}
      <View style={styles.cartContainer}>
      <FlatList
        data={whishlistData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>item && <CatCart  cartData={item}/>}
        numColumns={2}

       
      />
      </View>
      </SafeAreaView>

    </View>
  );
};

export default whishlist;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: wp("2%"),
    backgroundColor: 'white'
  },
  headerInnerContainer: {
    gap: 5,
  },
  headerTitle: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
  },
  itemContainer: {
    flexDirection: "row",

    alignItems: "center",
    gap: 10,
  },
  itemText: {
    fontSize: RFPercentage(2),
  },
  counts: {
    fontWeight: "bold",
  },

  // category

  categroyMainContainer: {
    marginVertical: hp("1%"),
  },
  categoryContainer: {
    paddingVertical: hp("1%"),
    paddingHorizontal: wp("4%"),
    margin: wp("2%"),
    borderRadius: wp("5%"),
    borderColor: "black",
    borderWidth: 1,
    elevation: 5,
    backgroundColor: "white",
  },
  activeCategory: {
    backgroundColor: "black",
  },

  textContainer: {
    fontSize: RFPercentage(2),
  },
  activeText: {
    color: "white",
  },

  // cart

  cartContainer: {
   paddingHorizontal: wp("2%"),
   marginBottom:hp("30%")
 
  },
});
