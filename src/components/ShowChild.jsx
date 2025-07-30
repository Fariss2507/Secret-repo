import { View, Text } from 'react-native';
import React, { useEffect } from 'react';

const ShowChild = () => {

    useEffect(()=>{
        
        return()=>{
            console.log('Im inside useEffect Hook ')
            // for unmounting phase we use return inside useEffect

        };
    }, []);
  return (
    <View>
      <Text style={{fontSize: 30}}>ShowChild</Text>
    </View>
  );
};

export default ShowChild;