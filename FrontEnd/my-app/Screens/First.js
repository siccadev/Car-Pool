import React from 'react';
import { View, TextInput, Button, StyleSheet, ScrollView, Picker, Text } from 'react-native';

const EditProfile = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TextInput style={styles.input} placeholder="Full name" />
      <TextInput style={styles.input} placeholder="Nick name" />
      <TextInput style={styles.input} placeholder="Label" />
      <View style={styles.phoneContainer}>
        <View style={styles.flag}>
          <Text>🇹🇳</Text>
        </View>
        <TextInput style={styles.phoneInput} placeholder="+00216" keyboardType="phone-pad" />
      </View>
      <View style={styles.row}>
        <Picker style={styles.picker}>
          <Picker.Item label="Kef" value="Kef" />
          {/* Add other country options here */}
        </Picker>
        <TextInput style={styles.input} placeholder="Genre" />
      </View>
      <TextInput style={styles.input} placeholder="Address" />
      <Button title="SUBMIT" onPress={() => { /* Handle submit action */ }} color="#007bff" />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
  },
  flag: {
    padding: 10,
  },
  phoneInput: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  picker: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
  },
  submitButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    borderRadius: 5,
  },
  submitButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default EditProfile;
