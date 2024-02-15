import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AntDesign, Ionicons,Feather } from '@expo/vector-icons'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
  import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
interface accountButtonProps{
    title:string
    iconName:any
 
  

}


const AccountButton = ({title,iconName}:accountButtonProps) => {
   
  return (
    <View style={styles.container}>
    {/* icon */}
    <View style={styles.leftContainer}>
      <AntDesign name={iconName} size={24} color="black" />
        <Text style={styles.text}>{title}</Text>
      </View>
      <AntDesign name="right" size={24} color="black" />

    </View>
  )
}

export default AccountButton

const styles=StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:wp('4%'),
    paddingVertical:hp('1%'),
    // backgroundColor:'white',
    marginBottom:hp('2%'),

  },
  leftContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap:10

  },
  text:{
    fontFamily:'latoSemiBold',
    fontSize:RFPercentage(2),

  }
  


})