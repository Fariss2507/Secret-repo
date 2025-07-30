import { View, Text, Button } from 'react-native';
import React, { useEffect, useState } from 'react';

const UseEffectHook = () => {

    const [count, setCount]= useState(1);


    useEffect(()=> {

     console.log('Api calling');
    }, []); //aray dependency k andar agr blank array pass hoga tw sirf mount
           //hotay hway call hoga sirf useeffect hook :)
  return (
    <View>
      <Text style={{fontSize: 30}}>UseEffectHook</Text>
      <Text style={{fontSize: 30}}>Counter: {count}</Text>
      <Button title="Counter" onPress={()=> setCount(count+1) } />
 
    </View>
  );
};

export default UseEffectHook;