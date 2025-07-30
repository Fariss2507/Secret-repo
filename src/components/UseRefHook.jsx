import React, { useRef } from 'react';
import { SafeAreaView, View, TextInput, TouchableOpacity, Text, StyleSheet } from 'react-native';

const UseRefHook = () => {

    const myRef=useRef();
    const handleRef=()=>{
        myRef.current.setNativeProps({
            text:'Fariss',
            style:{color: 'yellow', backgroundColor:'crimson'},

        });
    };
  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{justifyContent:'center'}} >
        <TextInput 
        ref={myRef}
          style={styles.input}
          placeholder="Enter text"
          placeholderTextColor="#999"
        />
        <TouchableOpacity style={styles.button} onPress={handleRef}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UseRefHook;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // makes sure SafeAreaView takes full screen
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    justifyContent: 'center',   // center vertically
    alignItems: 'center',       // center horizontally
    paddingHorizontal: 30,
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#000',
  },
  button: {
    backgroundColor: '#ff00f2',
    paddingVertical: 15,
    borderRadius: 10,
    width: '100%',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
