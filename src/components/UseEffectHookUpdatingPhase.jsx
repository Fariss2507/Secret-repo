import { View, Text, Button } from 'react-native';
import React, { useState } from 'react';
import { useEffect } from 'react';

const UseEffectHookUpdatingPhase = () => {

    const [counter, setCount]=useState(0);

    const [score, updateScore]=useState(10);

    useEffect(()=>{

        console.log('Im inside useEffect Hook');

    }, [counter]) //jisko update krny sy chlana chahty hum hook usko likhdo '[]' k andar simply

  return (
    <View>
      <Text style={{fontSize:30 }}>UseEffect Hook In Updating Phase </Text>
      <Text style={{fontSize:30 }}> Counter: {counter} </Text>
         <Text style={{fontSize:30 }}> Score: {score} </Text>

         <Button title="Counter" onPress={()=> setCount(counter+1)}/>
            <Button title="Score" onPress={()=> updateScore(score+10)}/>

               <UpdateInfo count={counter} points={score}/>
    </View>
  );
};

const UpdateInfo= ({count, points}) => {
    return(
<View> 
    <Text style={{fontSize:30}}>Now we are inside updateInfo function</Text>
     <Text style={{fontSize:30 }}> Counter: {count} </Text>
         <Text style={{fontSize:30 }}> Score: {points} </Text>
</View>
    );
};

export default UseEffectHookUpdatingPhase;