import React, {useState, useEffect} from 'react'
import {View, StyleSheet, Text, Button} from 'react-native'

const Test = () => {
    const [count, setCount] = useState(0)
    const [nextCount, setNextCount] = useState(0)
    
     useEffect(()=>{
        console.log(`the count is ${count}`)
     } , [nextCount])
    return (
        <View style={styles.container}>
            <Text style={styles.title}> {`count : ${count}`} </Text>
            <Button color={'red'} title={'Increase'} onPress={() => setCount(count+1)}  />
            
            <Button color={'blue'} title={'Decrease'} onPress={() => setCount(count-1)} />

            <Button color={'red'} title={'Increase'} onPress={() => setNextCount(nextCount+1)}  />
            
            <Button color={'blue'} title={'Decrease'} onPress={() => setNextCount(nextCount-1)} />

        </View>
         
    )
}

const styles = StyleSheet.create(
    {
        container : {
            flex : 1,
            backgroundColor:'orange'
        },
        title :{
            fontSize:25,
            alignSelf:'center',
            marginTop:30,

        }
    }
)
export default Test