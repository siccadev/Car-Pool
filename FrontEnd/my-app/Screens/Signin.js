import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Border, FontSize, FontFamily, Color } from "../GlobalStyles";

const Welcome = () => {
  return (
    <View style={styles.welcome}>
      <Image
        style={styles.welcomeChild}
        contentFit="cover"
        source={require("../assets/b.png")}
      />
      <View style={styles.welcomeItem} />
      <Text style={styles.signInTo}>Sign in to join</Text>
      <View style={[styles.welcomeInner, styles.welcomeChildLayout]} />
      <View style={[styles.rectangleView, styles.welcomeChildLayout]} />
      <View style={[styles.welcomeChild1, styles.welcomeChildLayout]} />
      <View style={[styles.welcomeChild2, styles.welcomeChildLayout]} />
      <Image
        style={[styles.rilockPasswordFillIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/b.png")}
      />
      <Image
        style={[styles.carbonemailIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/c.png")}
      />
      <Text style={[styles.emailAddress, styles.passwordTypo]}>
        Email Address
      </Text>
      <Text style={[styles.password, styles.passwordTypo]}>Password</Text>
      <Text style={[styles.signUpWith, styles.passwordTypo]}>
        Sign up with facebook
      </Text>
      <Text style={[styles.dontHaveAnContainer, styles.passwordTypo]}>
        <Text style={styles.dontHaveAn}>{`Don't have an account? `}</Text>
        <Text style={styles.signUp}>{`Sign Up
`}</Text>
      </Text>
      <Text style={[styles.signIn, styles.orTypo]}>Sign in</Text>
      <Text style={[styles.or, styles.orTypo]}>or</Text>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/c.png")}
      />
      <View style={styles.carLogoWithCircleHandColo} />
      <Image
        style={styles.hyhhy1Icon}
        contentFit="cover"
        source={require("../assets/c.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  welcomeChildLayout: {
    height: 45,
    width: 315,
    borderRadius: Border.br_11xl,
    left: 57,
    position: "absolute",
  },
  iconLayout: {
    height: 24,
    width: 24,
    left: 80,
    position: "absolute",
    overflow: "hidden",
  },
  passwordTypo: {
    height: 17,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    position: "absolute",
  },
  orTypo: {
    textAlign: "center",
    left: 160,
    height: 17,
    width: 109,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  welcomeChild: {
    top: -99,
    left: -86,
    width: 600,
    height: 600,
    position: "absolute",
  },
  welcomeItem: {
    top: 379,
    left: 44,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 1,
    elevation: 1,
    shadowOpacity: 1,
    borderRadius: 72,
    width: 363,
    height: 442,
    position: "absolute",
    backgroundColor: Color.colorWhite,
  },
  signInTo: {
    top: 395,
    left: 128,
    fontSize: 24,
    textAlign: "left",
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
    color: Color.colorSilver_100,
    position: "absolute",
  },
  welcomeInner: {
    top: 472,
    borderWidth: 1,
    borderStyle: "solid",
    height: 45,
    width: 315,
    borderRadius: Border.br_11xl,
    left: 57,
    borderColor: Color.colorSilver_100,
    backgroundColor: Color.colorWhite,
  },
  rectangleView: {
    top: 536,
    borderWidth: 1,
    borderStyle: "solid",
    height: 45,
    width: 315,
    borderRadius: Border.br_11xl,
    left: 57,
    borderColor: Color.colorSilver_100,
    backgroundColor: Color.colorWhite,
  },
  welcomeChild1: {
    top: 600,
    backgroundColor: Color.colorOrange,
    borderColor: Color.colorOrange,
    borderWidth: 1,
    borderStyle: "solid",
    height: 45,
    width: 315,
    borderRadius: Border.br_11xl,
    left: 57,
  },
  welcomeChild2: {
    top: 700,
    backgroundColor: "#3a559f",
    height: 45,
    width: 315,
    borderRadius: Border.br_11xl,
    left: 57,
  },
  rilockPasswordFillIcon: {
    top: 547,
  },
  carbonemailIcon: {
    top: 483,
  },
  emailAddress: {
    top: 486,
    width: 109,
    color: Color.colorSilver_200,
    height: 17,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    left: 116,
  },
  password: {
    top: 550,
    width: 109,
    color: Color.colorSilver_200,
    height: 17,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_sm,
    left: 116,
  },
  signUpWith: {
    top: 714,
    width: 159,
    color: Color.colorWhite,
    fontFamily: FontFamily.poppinsRegular,
    left: 116,
    height: 17,
    fontSize: FontSize.size_sm,
  },
  dontHaveAn: {
    color: Color.colorSilver_100,
  },
  signUp: {
    color: "#ff0000",
  },
  dontHaveAnContainer: {
    top: 835,
    left: 98,
    width: 255,
    height: 17,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.poppinsSemiBold,
    fontWeight: "600",
  },
  signIn: {
    top: 614,
    color: Color.colorWhite,
  },
  or: {
    top: 664,
    color: Color.colorSilver_100,
  },
  vectorIcon: {
    height: "2.16%",
    width: "2.34%",
    top: "77%",
    right: "78.97%",
    bottom: "20.84%",
    left: "18.69%",
    maxWidth: "100%",
    maxHeight: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  carLogoWithCircleHandColo: {
    top: -47,
    left: -27,
    width: 469,
    height: 284,
    position: "absolute",
  },
  hyhhy1Icon: {
    top: 18,
    left: 0,
    width: 421,
    height: 300,
    position: "absolute",
  },
  welcome: {
    flex: 1,
    width: "100%",
    height: 926,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
});

export default Welcome;