import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet } from 'react-native';

const contacts = [
  { id: '1', name: 'Fariss Faheem', phone: '123-456-7890' },
  { id: '2', name: 'Ali Khan', phone: '111-222-3333' },
  { id: '3', name: 'Ayesha Noor', phone: '987-654-3210' },
  { id: '4', name: 'Zainab Fatima', phone: '444-555-6666' },
  { id: '5', name: 'Ahmed Raza', phone: '777-888-9999' },
];

const Search = () => {
  const [query, setQuery] = useState('');

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(query.toLowerCase())
  );

  const renderItem = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.phone}>{item.phone}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Search Contacts</Text>

      <TextInput
        style={styles.input}
        placeholder="Type a name..."
        placeholderTextColor="#999"
        value={query}
        onChangeText={setQuery}
      />

      <FlatList
        data={filteredContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        ListEmptyComponent={
          <Text style={styles.emptyText}>No matching contacts found.</Text>
        }
        // showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F3F0', 
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: '600',
    color: '#4B4453',  
    marginBottom: 20,
    textAlign: 'center',
    fontFamily: 'sans-serif-medium',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 14,
    paddingHorizontal: 18,
    paddingVertical: 12,
    fontSize: 16,
    elevation: 5,
    color: '#3E3E3E',
    marginBottom: 25,
    fontFamily: 'sans-serif',
  },
  card: {
    backgroundColor: '#E7E6EB',
    padding: 18,
    borderRadius: 16,
    marginBottom: 15,
    elevation: 3,
    shadowColor: '#999',
    shadowOffset: { width: 1, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3E3E3E',
    marginBottom: 6,
    fontFamily: 'sans-serif-condensed',
  },
  phone: {
    fontSize: 14,
    color: '#6F6B7D',
    fontFamily: 'sans-serif-light',
  },
  emptyText: {
    textAlign: 'center',
    marginTop: 30,
    fontSize: 16,
    color: '#999',
    fontStyle: 'italic',
  },
});

export default Search;
