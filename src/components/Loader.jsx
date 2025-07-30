import { View, Text, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import React, { useState } from 'react';

const Loader = () => {

    const[loader, setLoader]=useState(false);
    const toggleLoader=()=>{
     setLoader(loader);
    };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}  onPress={toggleLoader}>
        <Text style={styles.buttonText}>{ loader? 'Hide Loader' : 'Show Loader'}</Text>
      </TouchableOpacity>
      {
        loader && (

            <View style={styles.loaderContainer}> 
                <ActivityIndicator size="large" color="#4CAF50"/>

                <Text style={styles.loaderContainer}> Loading.....</Text>
            </View>
        )
      }
    </View>
  );
};

export default Loader;

const styles=StyleSheet.create({

    container:{
        
        justifyContent:'center',
        // justifyItem:'centre',
        alignItems:'center',
        // backgroundColor:'#f0f0f0'
    },
    button:{
        paddingVertical:12,
        paddingHorizontal:20,
        backgroundColor:'#4CAF50',
        borderRadius:10,
        marginBottom:20,
        justifyContent:'center',
        alignItems:'center',
        alignContent:'center',
        
    },
    buttonText:{
        color:'#fff',
        fontSize:16,
        fontWeight:'700',

    },
    loaderContainer:{
     width:120,
     height:120,
     borderBlockColor:'#fff',
     borderRadius:12,
     justifyContent:'center',
     alignItems:'center',
     shadowColor:'black',
     elevation:500,
    },
    loadingText:{
        marginTop:10,
    fontSize:16,
color:'#4CAF50',
fontWeight:'700',   }

});