import { View, Text, Button } from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize:35, textAlign:'center'}}> This is Home Screen </Text>
      {/* <Button title="Go To About Screen" onPress={()=> navigation.navigate('About')}/> */}
    </View>
  );
};

export default Home;