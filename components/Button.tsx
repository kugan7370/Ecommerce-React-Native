import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface buttonProps{
    title:string
}

const ButtonTap = ({title}:buttonProps) => {
  return (
    <TouchableOpacity style={styles.bottonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonTap;

const styles = StyleSheet.create({
  bottonContainer: {
    width: '48%',
    height: hp("7%"),
    borderRadius: wp("7%"),
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2%"),
    paddingHorizontal: wp("4%"),
  },
  buttonText: {
    fontFamily: "latoSemiBold",
    fontSize: RFPercentage(2)
  },
});
