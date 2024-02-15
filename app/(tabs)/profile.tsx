import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { Ionicons } from "@expo/vector-icons";
import ButtonTap from "@/components/Button";
import AccountButton from "@/components/AccountButton";
import { accountData } from "@/data";

const profileImage = require("../../assets/images/profile.webp");

const profile = () => {
  return (
    <View style={styles.container}>
      {Platform.OS == "android" && (
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      )}

      <SafeAreaView>
        {/* header */}
        <View style={styles.headerContainer}>
        <View style={styles.profileContainer}>
          <View style={styles.imageContainer}>
            <Image source={profileImage} style={styles.image} />
          </View>
          <Text style={styles.helloText}>
            Hello, <Text style={styles.profileName}>Kugan</Text>
          </Text>
        </View>
          <View style={styles.rightIcons}>
            <Ionicons name="search" size={30} color="black" />
            <Ionicons name="notifications-outline" size={30} color="black" />

            <View style={styles.badge}>
              <Text style={styles.badgeText}>13</Text>
            </View>
          </View>
        </View>

      

        {/* profile taps */}

        <View style={styles.tapContainer}>
          <ButtonTap title={"Your Order"} />
          <ButtonTap title={"Wishlist"} />
          <ButtonTap title={"Coupons"} />
          <ButtonTap title={"Track Order"} />
        </View>

        {/* account Settings */}

        <View style={styles.accountContainer}>
          <Text style={styles.accountText}>Account Settings</Text>
          {accountData &&
            accountData.map((item) => (
              <AccountButton
                title={item.title}
                iconName={item.iconName}
                key={item.id}
              />
            ))}
        </View>
      </SafeAreaView>
    </View>
  );
};

export default profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },

  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: wp("4%"),
    paddingHorizontal: wp("4%"),
    backgroundColor: "white",
  },

  headerTitle: {
    fontSize: RFPercentage(3),
    fontWeight: "bold",
  },
  rightIcons: {
    flexDirection: "row",
    gap: wp("2%"),
  },

  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    width: wp("4%"),
    height: wp("4%"),
    borderRadius: wp("4%"),
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  badgeText: {
    color: "white",
    fontSize: RFPercentage(1.5),
    fontFamily: "latoRegular",
  },

  // profile name header
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    // marginTop: hp("2%"),
    // paddingHorizontal: wp("4%"),
  },

  imageContainer: {
    width: wp("10%"),
    height: wp("10%"),
    borderRadius: wp("10%"),
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
    objectFit: "cover",
  },
  helloText: {
    fontSize: RFPercentage(3),
    fontFamily: "latoSemiBold",
  },
  profileName: {
    fontSize: RFPercentage(3),
    fontFamily: "latoBold",
  },
  tapContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingHorizontal: wp("2%"),
    marginTop: hp("5%"),
    marginBottom: hp("2%"),
    gap: 5,
    justifyContent: "space-between",
  },

  // accout setting
  accountContainer: {
    marginTop: hp("2%"),
  },
  accountText: {
    fontSize: RFPercentage(3),
    fontFamily: "latoSemiBold",
    paddingHorizontal: wp("4%"),
    marginBottom: hp("2%"),
  },
});
