import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const Login = ({ navigation }) => {
  const [username, setUsername] = useState('');

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 25, marginBottom: 10 }}>Login Screen</Text>

      <TextInput
        placeholder="Enter Your Username"
        onChangeText={setUsername}
        value={username}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 15,
          borderRadius: 5,
        }}
      />

      <Button title="Login" onPress={() => navigation.navigate('About', { username })} />
    </View>
  );
};

export default Login;
