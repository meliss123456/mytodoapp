import React from 'react';
import {Text, View,StyleSheet } from 'react-native';


export default function Header() {
  return (
    <View style={styles.headercontainer}>
      <Text style={styles.headertext}>My Todo App</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  headercontainer: {
      marginTop:80,
      marginBottom:30,
  },
  headertext:{
      fontSize: 30,
      fontWeight:'bold',
      color:'#3f4e66',
  },
  
});
