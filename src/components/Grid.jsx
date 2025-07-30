import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { ScrollView } from 'react-native';

const data = [
  { id: 1, title: 'First Item' },
  { id: 2, title: 'Second Item' },
  { id: 3, title: 'Third Item' },
  { id: 4, title: 'Fourth Item' },
  { id: 5, title: 'Fifth Item' },
  { id: 6, title: 'Sixth Item' },
  { id: 7, title: 'Seventh Item' },
  { id: 8, title: 'Eighth Item' },
  { id: 9, title: 'Ninth Item' },
  { id: 10, title: 'Tenth Item' },
  { id: 11, title: 'Eleventh Item' },
  { id: 12, title: 'Twelfth Item' },
  { id: 13, title: 'Thirteenth Item' },
  { id: 14, title: 'Fourteenth Item' },
  { id: 15, title: 'Fifteenth Item' },
  { id: 16, title: 'Sixteenth Item' },
];



const Grid = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Grid</Text>
      <ScrollView contentContainerStyle={styles.scrollcontainer}>
     { data.map((item)=>(
        <View key={item.id} style={styles.griditem}>
            <Text style={styles.input}>{item.title}</Text>
        </View>

      )
    )
}
    </ScrollView> 
      
    </View>
  );
};
const styles= StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor:'white',
    },
    heading:{
        fontSize:30,
        fontWeight: 'bold',
        textAlign:'center',
        marginVertical: 20,
    },
    input:{
        fontSize:25,
        fontWeight:'bold',
        color:'yellow',
        padding: 3,
        textAlign:'center',
    },
    scrollcontainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap',
        padding: 10,
    },
    griditem:{
        backgroundColor:'crimson',
        width:'48%',
        marginBottom: 10,
        padding: 10,
        textAlign:'center',
        justifyContent:'center',
        borderRadius:10,
        height: 100,

    },

})

export default Grid;