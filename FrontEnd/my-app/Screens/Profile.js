import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";
import { Color, FontSize, FontFamily } from "../GlobalStyles";

const Profile = () => {
  return (
    <View style={styles.profile0}>
      <Image
        style={styles.profile0Child}
        contentFit="cover"
        source={require("../assets/a.png")}
      />
      <Image
        style={styles.nRemovebgPreview21}
        contentFit="cover"
        source={require("../assets/a.png")}
      />
      <Image
        style={styles.profile0Item}
        contentFit="cover"
        source={require("../assets/a.png")}
      />
      <View style={styles.avatarParent}>
        <Image
          style={styles.avatarIcon}
          contentFit="cover"
          source={require("../assets/a.png")}
        />
        <Text style={styles.abdelhakBarbouche}>Abdelhak Barbouche</Text>
        <Text style={styles.youremaildomaincom01}>
          youremail@domain.com | +01 234 567 89
        </Text>
      </View>
      <View style={styles.groupParent}>
        <View style={[styles.rectangleParent, styles.groupLayout]}>
          <View style={[styles.groupChild, styles.groupShadowBox]} />
          <View style={[styles.component11, styles.iconLayout]}>
            <Image
              style={[styles.linebusinessprofileLineIcon, styles.iconLayout]}
              contentFit="cover"
              source={require("../assets/a.png")}
            />
            <Text style={[styles.editProfileInformation, styles.editFlexBox]}>
              Edit profile information
            </Text>
            <Text style={[styles.english, styles.englishFlexBox]}>English</Text>
          </View>
          <View style={[styles.component12, styles.componentLayout]}>
            <Image
              style={[
                styles.linemedianotification3LineIcon,
                styles.componentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/a.png")}
            />
            <Text style={[styles.editProfileInformation1, styles.english7Typo]}>
              Notifications
            </Text>
            <Text style={styles.englishTypo}>ON</Text>
          </View>
          <View style={[styles.component13, styles.componentLayout]}>
            <Image
              style={[
                styles.linemedianotification3LineIcon,
                styles.componentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/a.png")}
            />
            <Text style={[styles.editProfileInformation1, styles.english7Typo]}>
              Language
            </Text>
            <Text style={styles.englishTypo}>English</Text>
          </View>
        </View>
        <View style={[styles.rectangleGroup, styles.groupLayout]}>
          <View style={[styles.groupItem, styles.groupShadowBox]} />
          <View style={[styles.component111, styles.componentLayout]}>
            <Image
              style={[
                styles.linemedianotification3LineIcon,
                styles.componentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/a.png")}
            />
            <Text
              style={[styles.editProfileInformation1, styles.english7Typo]}
            >{`Help & Support`}</Text>
            <Text style={[styles.english3, styles.englishTypo]}>English</Text>
          </View>
          <View style={[styles.component12, styles.componentLayout]}>
            <Image
              style={[
                styles.linemedianotification3LineIcon,
                styles.componentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/a.png")}
            />
            <Text style={[styles.editProfileInformation1, styles.english7Typo]}>
              Contact us
            </Text>
            <Text style={[styles.english3, styles.englishTypo]}>ON</Text>
          </View>
          <View style={[styles.component13, styles.componentLayout]}>
            <Image
              style={[
                styles.linemedianotification3LineIcon,
                styles.componentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/a.png")}
            />
            <Text style={[styles.editProfileInformation1, styles.english7Typo]}>
              Privacy policy
            </Text>
            <Text style={[styles.english3, styles.englishTypo]}>English</Text>
          </View>
        </View>
        <View style={[styles.rectangleContainer, styles.groupInnerLayout]}>
          <View style={[styles.groupInner, styles.groupInnerLayout]} />
          <View style={[styles.component111, styles.componentLayout]}>
            <Image
              style={[
                styles.linemedianotification3LineIcon,
                styles.componentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/a.png")}
            />
            <Text style={[styles.editProfileInformation1, styles.english7Typo]}>
              Security
            </Text>
            <Text style={[styles.english3, styles.englishTypo]}>English</Text>
          </View>
          <View style={[styles.component12, styles.componentLayout]}>
            <Image
              style={[
                styles.linemedianotification3LineIcon,
                styles.componentLayout,
              ]}
              contentFit="cover"
              source={require("../assets/a.png")}
            />
            <Text style={[styles.editProfileInformation1, styles.english7Typo]}>
              Theme
            </Text>
            <Text style={[styles.english7, styles.english7Typo]}>
              Light mode
            </Text>
          </View>
        </View>
      </View>
      <Image
        style={[styles.topIcon, styles.iconLayout]}
        contentFit="cover"
        source={require("../assets/a.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupLayout: {
    height: 133,
    width: 375,
    left: 0,
    position: "absolute",
  },
  groupShadowBox: {
    borderRadius: 9,
    shadowOpacity: 1,
    elevation: 4.39,
    shadowRadius: 4.39,
    shadowOffset: {
      width: 0,
      height: 1.0971565246582031,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  iconLayout: {
    height: 26,
    position: "absolute",
  },
  editFlexBox: {
    textAlign: "left",
    color: Color.lightGray11,
  },
  englishFlexBox: {
    textAlign: "right",
    color: Color.lightPrimary,
  },
  componentLayout: {
    height: 29,
    position: "absolute",
  },
  english7Typo: {
    lineHeight: 24,
    fontSize: FontSize.size_base_9,
    top: "8.3%",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  englishTypo: {
    width: "86.65%",
    lineHeight: 24,
    fontSize: FontSize.size_base_9,
    top: "8.3%",
    textAlign: "right",
    color: Color.lightPrimary,
    left: "22.38%",
    fontFamily: FontFamily.robotoRegular,
    letterSpacing: 0,
    position: "absolute",
  },
  groupInnerLayout: {
    height: 94,
    width: 375,
    left: 0,
    position: "absolute",
  },
  profile0Child: {
    top: -5,
    height: 294,
    left: 0,
    position: "absolute",
    width: 428,
  },
  nRemovebgPreview21: {
    left: 154,
    borderRadius: 61,
    width: 122,
    height: 122,
    top: 159,
    position: "absolute",
  },
  profile0Item: {
    top: 154,
    left: 144,
    width: 134,
    height: 134,
    position: "absolute",
  },
  avatarIcon: {
    left: 174,
    width: 50,
    height: 50,
    opacity: 0.5,
    top: 0,
    position: "absolute",
  },
  abdelhakBarbouche: {
    top: 47,
    left: 15,
    fontSize: FontSize.size_5xl_1,
    lineHeight: 31,
    fontWeight: "600",
    fontFamily: FontFamily.poppinsSemiBold,
    width: 283,
    textAlign: "center",
    color: Color.lightGray11,
    position: "absolute",
  },
  youremaildomaincom01: {
    width: "100%",
    top: "79.96%",
    left: "0%",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: 15,
    textAlign: "center",
    color: Color.lightGray11,
    position: "absolute",
  },
  avatarParent: {
    top: 245,
    left: 69,
    width: 301,
    height: 110,
    position: "absolute",
  },
  groupChild: {
    height: 133,
    width: 375,
    left: 0,
    position: "absolute",
  },
  linebusinessprofileLineIcon: {
    width: 26,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  editProfileInformation: {
    left: 41,
    width: 263,
    top: "8.37%",
    textAlign: "left",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: 15,
    position: "absolute",
  },
  english: {
    width: "86.64%",
    display: "none",
    left: "22.38%",
    textAlign: "right",
    color: Color.lightPrimary,
    top: "8.37%",
    fontFamily: FontFamily.robotoRegular,
    lineHeight: 22,
    letterSpacing: 0,
    fontSize: 15,
    position: "absolute",
  },
  component11: {
    width: 304,
    left: 18,
    height: 26,
    top: 15,
  },
  linemedianotification3LineIcon: {
    width: 29,
    top: 0,
    left: 0,
    overflow: "hidden",
  },
  editProfileInformation1: {
    left: 45,
    width: 289,
    textAlign: "left",
    color: Color.lightGray11,
  },
  component12: {
    top: 54,
    width: 333,
    height: 29,
    left: 18,
  },
  component13: {
    top: 94,
    width: 333,
    height: 29,
    left: 18,
  },
  rectangleParent: {
    top: 0,
  },
  groupItem: {
    height: 133,
    width: 375,
    left: 0,
    position: "absolute",
  },
  english3: {
    display: "none",
  },
  component111: {
    width: 333,
    height: 29,
    left: 18,
    top: 15,
  },
  rectangleGroup: {
    top: 280,
  },
  groupInner: {
    borderRadius: 9,
    shadowOpacity: 1,
    elevation: 4.39,
    shadowRadius: 4.39,
    shadowOffset: {
      width: 0,
      height: 1.0971565246582031,
    },
    shadowColor: "rgba(0, 0, 0, 0.25)",
    top: 0,
    backgroundColor: Color.colorWhite,
  },
  english7: {
    left: "82.36%",
    textAlign: "right",
    color: Color.lightPrimary,
  },
  rectangleContainer: {
    top: 159,
  },
  groupParent: {
    top: 435,
    left: 23,
    height: 413,
    width: 375,
    position: "absolute",
  },
  topIcon: {
    top: 24,
    left: 26,
    width: 384,
  },
  profile0: {
    borderRadius: 35,
    height: 926,
    overflow: "hidden",
    width: 428,
    backgroundColor: Color.colorWhite,
  },
});

export default Profile;
