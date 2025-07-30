import { View, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // make sure you import axios

const GET_API = () => {

  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users')
      .then((result) => {
        setMyData(result.data);
      })
      .catch((error) => {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <View>
      <Text style={{ fontSize: 25, marginBottom: 10 }}>GET API METHOD</Text>
      {
        myData.map((item) => (
          <Text style={{fontSize:30}} key={item.id}>{item.name}</Text>  
        ))
      }
    </View>
  );
};

export default GET_API;
