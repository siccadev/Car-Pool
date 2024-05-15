import React, { useRef, useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  SafeAreaView,
  Animated,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';

const { width, height } = Dimensions.get('window');

const slides = [
  {
    title: 'Book Your Car Rental',
    message: 'Easily book your chosen car and pick it up at your preferred location.',
    action: 'Continue',
  },
  {
    title: 'Hit the Road',
    message: 'Enjoy the freedom of driving wherever you want, whenever you want.',
    action: 'Start driving',
  },
];

const cars = [
  {
    uri: 'https://th.bing.com/th/id/R.c596f33b265177ff18a8b9a14734ebed?rik=Bpojk5LKAjB4ZQ&pid=ImgRaw&r=0',
    position: [-50, 15],
    rotate: '15deg',
  },
  {
    uri: 'https://via.placeholder.com/600x400/64B5F6/ffffff',
    position: [180, 120],
    rotate: '-10deg',
  },
  {
    uri: 'https://via.placeholder.com/600x400/64B5F6/ffffff',
    position: [540, 50],
    rotate: '20deg',
  },
  {
    uri: 'https://via.placeholder.com/600x400/64B5F6/ffffff',
    position: [860, 25],
    rotate: '-4deg',
  },
];

function Background() {
  return (
    <View style={styles.elements}>
      {cars.map(({ uri, position: [x, y], rotate }, index) => (
        <View
          style={[
            styles.car,
            {
              zIndex: cars.length - index,
            },
          ]}
          key={index}>
          <Image
            style={[
              styles.carImage,
              {
                width: width * 0.8,
                height: width * 0.6,
                top: y,
                left: x,
                transform: [{ rotate }],
              },
            ]}
            source={{ uri }}
          />
        </View>
      ))}
    </View>
  );
}

export default function CarRentalApp({ navigation }) {
  const [slide, setSlide] = useState(0);

  const swiper = useRef();
  const scrollX = useRef(new Animated.Value(0)).current;

  const contentOpacityRanges = Array.from({ length: slides.length }).reduce(
    (acc, _, index) => {
      const screenWidth = index * width;
      const screenWidthMiddle = screenWidth + width / 2;

      acc.inputRange.push(screenWidth, screenWidthMiddle);
      acc.outputRange.push(1, 0.2);

      return acc;
    },
    {
      inputRange: [],
      outputRange: [],
    },
  );
  const contentOpacity = scrollX.interpolate(contentOpacityRanges);

  const animatedBackgroundLeft = scrollX.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [1, 0, -1],
  });

  return (
    <SafeAreaView style={styles.container}>
      <Animated.View
        style={{
          left: animatedBackgroundLeft,
        }}>
        <Background />
      </Animated.View>
      <Swiper
        ref={swiper}
        showsPagination={false}
        loop={false}
        onIndexChanged={setSlide}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {
                contentOffset: {
                  x: scrollX,
                },
              },
            },
          ],
          { useNativeDriver: false },
        )}
        scrollEventThrottle={1}>
        {slides.map(({ title, message, action }, index) => {
          return (
            <Animated.View
              style={[styles.slide, { opacity: contentOpacity }]}
              key={index}>
              <Text style={styles.slideTitle}>{title}</Text>
              <Text style={styles.slideText}>{message}</Text>

              <TouchableOpacity
                onPress={() => {
                  if (action === 'Start driving') {
                    // Navigate to the desired screen or perform the action
                    // For example, navigate to another screen using navigation.navigate('ScreenName')
                    // Replace 'ScreenName' with the name of your target screen
                    navigation.navigate('Signup');
                  }
                }}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>{action}</Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
          );
        })}
      </Swiper>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  elements: {
    width: width * cars.length,
    height: 0.6 * height,
    position: 'absolute',
    top: 47,
    left: 0,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFEDD5', // Background color
  },
  car: {
    position: 'absolute',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,
  },
  carImage: {
    borderRadius: 24,
  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
    position: 'relative',
    justifyContent: 'flex-end',
    paddingHorizontal: 24,
  },
  slideTitle: {
    fontSize: 36,
    lineHeight: 40,
    fontWeight: '600',
    color: '#0d0d0d',
    marginBottom: 12,
  },
  slideText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#0d0d0d',
  },
  button: {
    backgroundColor: '#0d0d0d',
    padding: 18,
    borderRadius: 12,
    marginTop: 48,
    marginBottom: 36,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
  },
});
