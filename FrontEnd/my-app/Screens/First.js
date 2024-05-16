import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable, useWindowDimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { FontFamily, Color } from "../GlobalStyles";

const Launch = () => {
  const navigation = useNavigation();
  const windowDimensions = useWindowDimensions();
  const { width, height } = windowDimensions;

  // Calculate styles dynamically based on window dimensions
  const logoWrapperSize = {
    width: width * 0.8,
    aspectRatio: 1, // Maintain aspect ratio
    alignSelf: "center",
    position: "absolute",
    top: height * 0.3,
  };

  const covoiturageStyle = {
    top: height * 0.5,
    fontSize: width * 0.1,
    fontFamily: FontFamily.amitaRegular,
    color: "#000",
    textAlign: "center",
  };

  const bySiccadevStyle = {
    top: height * 0.85,
    fontSize: width * 0.04,
    fontFamily: FontFamily.amikoRegular,
    color: Color.colorWhite,
    textAlign: "center",
  };

  const d9d65c23fc230581db1564ffa8f4e0IconStyle = {
    top: height * 0.1,
    width: width * 0.8,
    aspectRatio: 1, // Maintain aspect ratio
    alignSelf: "center",
    position: "absolute",
  };

  return (
    <Pressable
      style={[styles.launch, { height }]}
      onPress={() => navigation.navigate("Welcome")}
    >
      <View style={logoWrapperSize}>
        <Image
          style={styles.logoIcon}
          resizeMode="contain"
          source={require("../assets/c.png")}
        />
      </View>
      <Text style={[styles.covoiturage, styles.text, covoiturageStyle]}>
        covoiturage
      </Text>
      <Text style={[styles.bySiccadev, styles.text, bySiccadevStyle]}>
        By siccadev
      </Text>
      <Image
        style={[styles.d9d65c23fc230581db1564ffa8f4e0Icon, d9d65c23fc230581db1564ffa8f4e0IconStyle]}
        resizeMode="contain"
        source={require("../assets/a.png")}
      />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    position: "absolute",
  },
  logoIcon: {
    width: "100%",
    height: "100%",
    
  },
  launch: {
    backgroundColor: "#00b2ff",
    width: "100%",
    alignItems: "center",
  },
  covoiturage: {
    fontSize: 40, // Default value for fontSize
    fontFamily: FontFamily.amitaRegular,
    color: "#000",
  },
  bySiccadev: {
    fontSize: 16, // Default value for fontSize
    fontFamily: FontFamily.amikoRegular,
    color: Color.colorWhite,
  },
  d9d65c23fc230581db1564ffa8f4e0Icon: {
    width: "100%",
    height: "100%",
    
  },
});

export default Launch;
