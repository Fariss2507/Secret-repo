import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useState } from 'react';
import axios from 'axios';

const DELETE_API = () => {
    const [id, setId]=useState();
    const deleteData= async()=>{
  try {
    const response= await axios.delete(`http://10.0.2.2:3000/users/${id}`);
    Alert.alert('Success', 'Data Deleted Successfully');
  } catch (error) {
    Alert.alert('Error', 'Failed To Delete Data');
    
  }
    };
  return (
    <View>
      <Text style={{fontSize:24, textAlign:'center', marginBottom:20}}>DELETE_API</Text>
      <TextInput style={{borderWidth: 1, marginBottom: 10, padding: 8 }}
      placeholder="Enter id"
value={id}
      onChangeText={(value)=> setId(value)}
      />
      <Button title="Delete Data" onPress={deleteData}/>
    </View>
  );
};

export default DELETE_API;