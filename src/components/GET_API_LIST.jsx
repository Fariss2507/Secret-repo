import { View, Text, FlatList, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const GET_API_LIST = () => {
  const [myData, setMyData] = useState([]);

  useEffect(() => {
    axios.get('http://10.0.2.2:3000/users')
      .then((response) => {
        setMyData(response.data);
      })
      .catch((error) => {
        console.error("API Error:", error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
      <Text style={styles.itemText}>{item.email}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Users</Text>
      <FlatList
        data={myData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'crimson',
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'yellow',
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-condensed',
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: 'yellow',
    paddingVertical: 10,
  },
  itemText: {
    color: 'yellow',
    fontWeight: 'bold',
    fontSize: 18,
    fontFamily: 'sans-serif-condensed',
  },
});

export default GET_API_LIST;
