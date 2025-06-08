import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.container}>

      </View>
       <View style={{height:10}}>

      </View>
       <View style={styles.container}>

      </View>
    </View>
  )
}

export default index

const styles = StyleSheet.create({
    mainContainer: {
        padding: 20,
    },
    container:{
        borderColor: 'red',
        padding: 20,
        borderWidth: 2,
        borderRadius: 10,
    }
})