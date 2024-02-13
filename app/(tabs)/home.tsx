import { View, Text, StyleSheet, Image, FlatList, ScrollView } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { brand, categories, sliderImages } from '@/data';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { Colors } from '@/constants/Colors';
const profileImage = require('../../assets/images/profile.webp')
const featuredImage = require('../../assets/images/Feature/3.webp')

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>

      {/* header */}
      <View style={styles.header}>
        {/* left icon */}
        
        <View style={styles.profileImageContainer}>
         
          <Image style={styles.profileImage} source={profileImage} />
        </View>
        {/* middle icon */}
          <Text style={styles.username}>Hello's Kugan</Text>

    
        
        {/* right icon */}
        <View style={styles.rightIcons}>
          <Ionicons name="search" size={30} color="black" />
          <Ionicons name="notifications-outline" size={30} color="black" />

          <View style={styles.badge} >
            <Text style={styles.badgeText}>13</Text>
          </View>
       
        </View>
      </View>

      <ScrollView>

      

      {/* feature */}

      <View style={styles.featureContainer}>
        <View style={styles.featureTextContainer}>
        <Text style={styles.featureText}>Make Your Fashion Looking Mire Charming</Text>

        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>Price</Text>
          <Text style={styles.priceCount}>$168</Text>
        </View>

        <View style={styles.viewDetails}>
          <Text style={styles.viewDetailsText}>View Details</Text>
        </View>
        </View>

        <View style={styles.featureImageContainer}>
          <Image style={styles.featureImage} source={featuredImage}  />
        </View>
      </View>

        {/* brands */}

        <View style={styles.brandsContainer}>
        {/* <Text style={styles.brandsMainText}>Top Brands</Text> */}
        <FlatList
          data={brand}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.brandContainer}>
              <Image style={styles.brandImage} source={item.image} />
            </View>
          )}
        />
      </View>

      {/* category */}

     <View style={styles.categoriesMainContainer}>
        <Text style={styles.categoryMainText}>Set Your Wardrobe With Our Amazing Selection!</Text>
<View>
        <FlatList
          data={categories}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View style={styles.categoryContainer}>
              <View style={styles.catImageContainer}>
              <Image style={styles.categoryImage} source={item.image} />
              </View>
              <View style={styles.catTextContainer}>
              <Text  style={styles.categoryText}>{item.name}</Text>
              </View>
            </View>
          )}
        />
       
      </View>
      </View>

      {/* slider */}
      <View style={styles.sliderContainer}>
        <Text style={styles.sliderMainText}>Trending Now</Text>

        <FlatList
          data={sliderImages}
          keyExtractor={item => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          
          renderItem={({ item }) => (
            <View style={styles.sliderImageContainer}>
              <Image style={styles.sliderImage} source={item.image} />
            </View>
          )}
        />
      </View>

    

      {/* deals of the day */}

      {/* promotions */}

      {/* the kids corner */}

      </ScrollView>

    </SafeAreaView>
  )
}


export default Home

const styles = StyleSheet.create({
  // header style
  container: {
    flex: 1,
    backgroundColor: '#fffaf3',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: hp('1%'),
   
    
  },
  rightIcons: {
    flexDirection: 'row',
    gap: wp('2%'),
  },
  profileImageContainer: {
    height: hp('6%'),
    width: hp('6%'),
    borderRadius: hp('6%'),
    overflow: 'hidden',
    marginRight: wp('2%'),
  },
  profileImage: {
    width: '100%',
    height: '100%',
    borderRadius: wp('5%'),
  },

  username: {
    fontSize: RFPercentage(2),
    fontFamily: 'latoSemiBold',
    flex: 1,
  },

badge:{
  position: 'absolute',
  top: -5,
  right: -5,
  backgroundColor: 'red',
  width: wp('4%'),
  height: wp('4%'),
  borderRadius: wp('4%'),
  justifyContent: 'center',
  alignItems: 'center',
  zIndex: 1,
 

},
badgeText:{
  color: 'white',
  fontSize:RFPercentage(1.5),
  fontFamily: 'latoRegular'
},

// feature style
featureContainer: {
  marginTop: hp('2%'),
  flexDirection: 'row',
  elevation: 5,

 
},
featureTextContainer: {
  flex: 2,
  paddingVertical: hp('1%'),
  paddingLeft: wp('2%'),
  paddingRight: wp('5%'),
  gap: hp('1%'),
},
featureText: {
  fontSize: RFPercentage(3),
  fontFamily: 'latoSemiBold',
},
featureImageContainer: {
  flex: 1,
  width: wp('100%'),
  height: hp('25%'),
  borderTopLeftRadius: wp('5%'),
  borderBottomLeftRadius: wp('5%'),
  overflow: 'hidden',

},
featureImage: {
  width: '100%',
  height: '100%',
},
priceContainer: {

  marginTop: hp('1%'),
},
priceText: {
  fontSize: RFPercentage(2),
  fontFamily: 'latoSemiBold',
  marginBottom: hp('1%'),
  color:Colors.light.contentColor
},
priceCount: {
  fontSize: RFPercentage(4),
  fontFamily: 'latoSemiBold',
  
},
viewDetails: {
  marginTop: hp('1%'),

  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:Colors.light.themeColor,
  width: wp('40%'),
  height: hp('5%'),
  
  borderRadius: wp('4%'),
},
viewDetailsText: {
  textAlign: 'center',
  fontSize: RFPercentage(2),
  fontFamily: 'latoSemiBold',
  color: 'white',
},






// category style
categoriesMainContainer: {
  marginTop: hp('1%'),
 
 
},

categoryMainText:{
  fontSize: RFPercentage(3),
  fontFamily: 'latoSemiBold',
  padding: hp('1%'),
  
},

 categoryContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: hp('2%'),

  },
  catImageContainer: {
    width: wp('33%'),
    height: wp('33%'),
    borderRadius: wp('33%'),
    overflow: 'hidden',
   
  },
  categoryImage: {
    objectFit: 'contain',
    width: '100%',
    height: '100%',
   
  },
  catTextContainer: {
    marginTop: hp('1%'),
    borderWidth: 1,
    borderColor: 'black',
    paddingVertical: hp('1%'),
    paddingHorizontal: hp('2%'),

 borderRadius: wp('4%'),
    
  },
  categoryText: {
    textAlign: 'center',
    fontSize: RFPercentage(2),
    fontFamily: 'latoSemiBold',
    
    
  },
  category: {
    alignItems: 'center',
  },
  
  // slider style

  sliderContainer: {
    marginTop: hp('4%'),
    
  },
  sliderMainText: {
    fontSize: RFPercentage(3),
    fontFamily: 'latoSemiBold',
    padding: hp('1%'),
  
   
  },

  sliderImageContainer: {
    width: wp('100%'),
    height: hp('22%'),
    overflow: 'hidden',
    marginTop: hp('2%'),
    backgroundColor: 'red',
    
  },
  sliderImage: {
    width: '100%',
    height: '100%',
    // borderRadius: wp('5%'),
    // objectFit: 'contain',
  },

  // brands style
  brandsContainer: {
    marginTop: hp('4%'),
  },

  brandsMainText: {
    fontSize: RFPercentage(3),
    fontFamily: 'latoSemiBold',
    padding: hp('1%'),
  },
  brandContainer: {
    width: wp('25%'),
    height: hp('8%'),
    overflow: 'hidden',
    // borderRadius: wp('25%'),
    marginRight: wp('9%'),
    // backgroundColor: 'red',
  },

  brandImage: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },






 

 
})