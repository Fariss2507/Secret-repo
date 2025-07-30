import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const PUT_API = () => {
    const [formData, setFormData]=useState({id:'', name:'', email:''});

    const handleInput=(field, value)=>{

        setFormData( {...formData, [field]: value});
    };

    const handleUpdate= async()=>{
  try {
    const response= await axios.put(`http://10.0.2.2:3000/users/${formData.id}`, {
name:formData.name,
email:formData.email,
  });
  setFormData({id:'', name:'', email:''})
  Alert.alert('Success', 'Updated Successfully');
  } catch (error) {
    Alert.alert('Error', 'An Error Has occured')
  }
    };
  return (
    <View>
      <Text style={{fontSize:30, textAlign: 'center'}}>PUT_API</Text>
      <TextInput
     
      placeholder="Enter id"
      value={formData.id}
onChangeText={(value)=> handleInput('id', value)}

      />
      <TextInput
      placeholder="Enter Name"
      value={formData.name}
      onChangeText={(value)=> handleInput('name', value)}
      />
      <TextInput
      placeholder="Enter email"
      value={formData.email}
      onChangeText={(value)=> handleInput('email', value)}
      />

      <Button title="Update" onPress={handleUpdate}/>
    </View>
  );
};

export default PUT_API;