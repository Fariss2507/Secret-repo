import { View, Text, TouchableOpacity, StyleSheet, Button, TouchableHighlight } from 'react-native';
import React from 'react';

const StyleWithButtons = () => {
  return (
    <View>
<Button title="Press Me"  />

<TouchableOpacity style={styles.button} activeOpacity={0.6}> 
            <Text style={styles.buttonText}>Touchable Opacity</Text>
        </TouchableOpacity>

        <TouchableHighlight style={styles.button} onPress={()=>{
            console.log('Touchable Highlight pressed')
        }}>
            <Text style={styles.buttonText} > Touchable Highlight</Text>
        </TouchableHighlight>
        
      
        {/* baki hum touchable highligh ko click krny pr kis color ka hona 
        bhi control krsktay hyn like k konsa color ka hojaye us k liye use hota h 
        "underlayColor" */}
    </View>
  );
};

const styles= StyleSheet.create({
    button: {
    backgroundColor: '#a4069dff',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems:'center',
    margin: 20,
    padding: 25,
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },

});

export default StyleWithButtons;