import { View, Text,StyleSheet,SafeAreaView, Platform, StatusBar, FlatList } from 'react-native'
import React from 'react'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MyCart from '@/components/MyCart';
import { whishlistData } from '@/data';


const cart = () => {
  return (
    <View style={styles.container}>
    {Platform.OS === 'android' && <StatusBar backgroundColor="#fff" barStyle="dark-content" />}
     <SafeAreaView>
     {/* header */}
     <View style={styles.headerContainer}>
       <View style={styles.headerInnerContainer}>
         <Text style={styles.headerTitle}>My Cart</Text>
         <View style={styles.itemContainer}>
           <Text style={styles.itemText}>
             <Text style={styles.counts}>8</Text> Items
           </Text>
           <Text style={styles.itemText}>
             Deliver To : <Text style={styles.counts}>London</Text>
           </Text>
         </View>
       </View>
      <View style={styles.locationContainer}>
      <Ionicons name="location" size={24} color="black" />
      <Text style={styles.counts}>Change</Text>
      </View>
     </View>

     {/* subtotal */}
     <View style={styles.subtotalMainContainer}>
     <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>Subtotal</Text>
        <Text style={styles.subtotalCount}>$ 2500</Text>
     </View>
      <View style={styles.deliveryContainer}>
      <Ionicons name="checkmark-circle" size={24} color="green" />
          <Text style={styles.deliveryMessafe}>Your order id eligible for free Delivery</Text>
     </View>
      </View>

      <View style={styles.cartContainer}>
        <FlatList 
        data={whishlistData}
        keyExtractor={(item)=>item.id.toString()}
        renderItem={({item})=> <MyCart item={item}/>}

        />


       
      </View>
     </SafeAreaView>
    </View>

  )
}


export default cart

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: wp("4%"),
    backgroundColor: 'white',
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
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    borderWidth: 1,
    borderRadius:wp("5%"),
    paddingVertical: wp("2%"),
    paddingHorizontal: wp("3%"),
  },

  // subtotal
  subtotalMainContainer: {
    padding: wp("2%"),
    backgroundColor: "#f5f5f5",
  },
  subtotalContainer: {
    flexDirection: "row",
gap: 10,
    alignItems: "center",
    padding: wp("2%"),
  },
  subtotalText: {
    fontSize: RFPercentage(2),
    fontWeight:'500'
  },
  subtotalCount: {
    fontSize: RFPercentage(2),
    fontWeight: "bold",
  },
  deliveryContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    padding: wp("2%"),
  },
  deliveryMessafe: {
    fontSize: RFPercentage(2),
    color: "green",
    fontWeight: "bold",
    fontFamily: "latoBold",
  },
  cartContainer: {
    paddingHorizontal: wp("2%"),
    marginBottom:hp("30%"),
    backgroundColor: "white",
  
   },

 

 
})