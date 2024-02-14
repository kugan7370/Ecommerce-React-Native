import {
  View,
  Text,
  Platform,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { categories, whishlistData } from "@/data";
import CatCart from "@/components/whishlistCart";
import CategoryCart from "@/components/CategoryCart";

const Category = () => {
  return (
    <View style={styles.container}>
      {Platform.OS === "android" && (
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      )}
      <SafeAreaView>
        {/* header */}
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>My Cart</Text>
          <Ionicons name="search" size={24} color="black" />
        </View>

        {/* category */}
        <ScrollView>
        <View style={styles.categoriesMainContainer}>
          <Text style={styles.categoryMainText}>
            Set Your Wardrobe With Our Amazing Selection!
          </Text>
          <View style={styles.innerCatContainer}>
            {categories.map((item) => (
              <View key={item.id} style={styles.categoryContainer}>
                <View style={styles.catImageContainer}>
                  <Image style={styles.categoryImage} source={item.image} />
                </View>
                <View style={styles.catTextContainer}>
                  <Text style={styles.categoryText}>{item.name}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>

        {/* Catergory cart */}
        <View style={styles.cartContainer}>
          {whishlistData.map((item) => (
            <CategoryCart key={item.id} cartData={item} />
          ))}
          
      {/* <FlatList
        data={whishlistData}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) =>item && <CategoryCart  cartData={item}/>}
        numColumns={2}
      /> */}
      </View>
      </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  headerContainer: {
    padding: wp("4%"),
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
  },

  // category style
  categoriesMainContainer: {
    marginTop: hp("1%"),
    
  },

  categoryMainText: {
    fontSize: RFPercentage(3),
    fontFamily: "latoSemiBold",
    padding: hp("1%"),
  },
  innerCatContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: wp("2%"),
   
  },

  categoryContainer: {
    marginTop: hp("2%"),
  },
  catImageContainer: {
    width: wp("30%"),
    height: wp("25%"),
   
  },
  categoryImage: {
    objectFit: "contain",
    width: "100%",
    height: "100%",
  },
  catTextContainer: {
    marginTop: hp("1%"),
    borderWidth: 1,
    borderColor: "black",
    paddingVertical: hp("1%"),
    paddingHorizontal: hp("2%"),

    borderRadius: wp("4%"),
  },
  categoryText: {
    textAlign: "center",
    fontSize: RFPercentage(2),
    fontFamily: "latoSemiBold",
  },
  category: {
    alignItems: "center",
  },
  cartContainer: {
    paddingHorizontal: wp("2%"),
    marginTop: hp("2%"),
    marginBottom:hp("10%"),
    flexDirection: "row",
    flexWrap: "wrap",
  
   },
});
