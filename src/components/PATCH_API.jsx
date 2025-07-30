import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PATCH_API = () => {
  const [formData, setFormData] = useState({ id: '', name: '', email: '' });

  const handleInput = (field, value) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleUpdate = async () => {
    try {
      const updateData = {};
      if (formData.name) updateData.name = formData.name;
      if (formData.email) updateData.email = formData.email;

      const response = await axios.patch(
        `http://10.0.2.2:3000/users/${formData.id}`,
        updateData
      );

      setFormData({ id: '', name: '', email: '' });
      Alert.alert('Success', 'Updated Successfully');
    } catch (error) {
      Alert.alert('Error', 'An error has occurred');
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 30, textAlign: 'center', marginBottom: 20 }}>
        PATCH API
      </Text>

      <TextInput
        placeholder="Enter ID"
        value={formData.id}
        onChangeText={(value) => handleInput('id', value)}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Enter Name"
        value={formData.name}
        onChangeText={(value) => handleInput('name', value)}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />
      <TextInput
        placeholder="Enter Email"
        value={formData.email}
        onChangeText={(value) => handleInput('email', value)}
        style={{ borderWidth: 1, marginBottom: 10, padding: 8 }}
      />

      <Button title="Update with PATCH" onPress={handleUpdate} />
    </View>
  );
};

export default PATCH_API;
