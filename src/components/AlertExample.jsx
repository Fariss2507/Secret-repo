import { View, Text, Button, Alert } from 'react-native';
import React from 'react';

const showAlert=()=>{
    Alert.alert(
        'Alert Title',
        ' Mamla ghambir horha h ',
        [
            {
                title: 'Ok',
                onPress: ()=> console.log('Ok'),
                style:'cancel',
            },

            {
                title: 'Cancel',
                onPress: ()=> console.log('Cancel'),
                style:'cancel',
            },
        ],
        {cancelable: false}
    );
};

const AlertExample = () => {
  return (
    <View>
      <Text style={{fontSize:30}}>AlertExample</Text>
      <Button title="Show alert message" onPress={showAlert}/>


    </View>
  );
};

export default AlertExample;