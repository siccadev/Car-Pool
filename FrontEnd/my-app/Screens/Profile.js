import React, { useState, useContext, createContext } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Profile from '../assets/profile.jpg';

// Create a ThemeContext to manage the theme state
const ThemeContext = createContext();

const ProfileScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Define styles based on the current theme
  const themeStyles = isDarkMode ? darkStyles : lightStyles;

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ScrollView contentContainerStyle={[styles.container, themeStyles.container]}>
        <View style={styles.header}>
          <Icon name="bell" size={24} color={themeStyles.icon.color} style={styles.icon} />
          <Icon name="refresh" size={24} color={themeStyles.icon.color} style={styles.icon} />
          <Icon name="ellipsis-v" size={24} color={themeStyles.icon.color} style={styles.icon} />
        </View>
        <View style={styles.profileContainer}>
          <Image source={Profile} style={styles.profileImage} />
          <Text style={[styles.profileName, themeStyles.text]}>username</Text>
          <Text style={[styles.profileEmail, themeStyles.text]}>
            youremail@domain.com | +01 234 567 89
          </Text>
        </View>
        <View style={[styles.section, themeStyles.section]}>
          <TouchableOpacity style={styles.sectionItem}>
            <Icon name="edit" size={24} color={themeStyles.icon.color} />
            <Text style={[styles.sectionText, themeStyles.text]}>Edit profile information</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Icon name="bell" size={24} color={themeStyles.icon.color} />
            <Text style={[styles.sectionText, themeStyles.text]}>Notifications</Text>
            <Text style={[styles.sectionDetail, themeStyles.detail]}>ON</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Icon name="globe" size={24} color={themeStyles.icon.color} />
            <Text style={[styles.sectionText, themeStyles.text]}>Language</Text>
            <Text style={[styles.sectionDetail, themeStyles.detail]}>English</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.section, themeStyles.section]}>
          <TouchableOpacity style={styles.sectionItem}>
            <Icon name="lock" size={24} color={themeStyles.icon.color} />
            <Text style={[styles.sectionText, themeStyles.text]}>Security</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem} onPress={toggleTheme}>
            <Icon name="sun-o" size={24} color={themeStyles.icon.color} />
            <Text style={[styles.sectionText, themeStyles.text]}>Theme</Text>
            <Text style={[styles.sectionDetail, themeStyles.detail]}>
              {isDarkMode ? 'Dark mode' : 'Light mode'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.section, themeStyles.section]}>
          <TouchableOpacity style={styles.sectionItem}>
            <Icon name="question-circle" size={24} color={themeStyles.icon.color} />
            <Text style={[styles.sectionText, themeStyles.text]}>Help & Support</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Icon name="envelope" size={24} color={themeStyles.icon.color} />
            <Text style={[styles.sectionText, themeStyles.text]}>Contact us</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.sectionItem}>
            <Icon name="file-text" size={24} color={themeStyles.icon.color} />
            <Text style={[styles.sectionText, themeStyles.text]}>Privacy policy</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ThemeContext.Provider>
  );
};

// Define common styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  icon: {
    marginLeft: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  profileEmail: {
    fontSize: 16,
    color: '#666',
  },
  section: {
    borderRadius: 10,
    marginVertical: 10,
    padding: 10,
  },
  sectionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  sectionText: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  sectionDetail: {
    fontSize: 16,
  },
});

// Define light theme styles
const lightStyles = StyleSheet.create({
  container: {
    backgroundColor: '#f7f7f7',
  },
  text: {
    color: '#000',
  },
  icon: {
    color: '#000',
  },
  section: {
    backgroundColor: '#fff',
  },
  detail: {
    color: '#007bff',
  },
});

// Define dark theme styles
const darkStyles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
  },
  text: {
    color: '#fff',
  },
  icon: {
    color: '#fff',
  },
  section: {
    backgroundColor: '#555',
  },
  detail: {
    color: '#007bff',
  },
});

export default ProfileScreen;
