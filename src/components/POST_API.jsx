import { View, Text, TextInput, Button, Alert, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const POST_API = () => {

  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post('http://10.0.2.2:3000/users', formData);
      Alert.alert('Submit Successfully', 'Your data has been submitted successfully.');

      
      setFormData({ id: '', name: '', email: '' });
    } 
    catch (error) {
      Alert.alert('Error', 'Failed to submit');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>POST_API</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter ID"
        value={formData.id}
        onChangeText={(value) => handleInput('id', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInput('name', value)}
      />

      <TextInput
        style={styles.input}
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInput('email', value)}
      />

      <Button title="Submit Data"  onPress={handleSubmit} />
    </View>
  );
};

export default POST_API;

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontSize: 30,
    marginBottom: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10
  }
});
