import React from 'react';
import { StyleSheet, View,Text,Button } from 'react-native';

import Card from '../components/Card';
import Header from '../components/Header';

const DashBoard = props => {
  return (
    <View>
        <Header title="DashBoard" />
        
      <View style={styles.screen}>
            <Card style={{height:'95%' ,marginBottom:20}}>
            <View>
                <View style={styles.butt}>
                <Button title="Bill Split"    color = "#12356e" />
                </View>
                <View style={styles.butt}>
                <Button title="Create Group"   color = "#12356e" /></View>
                <View style={styles.butt}>
                <Button title="Check Balance"   color = "#12356e" /></View>
                <View style={styles.butt}>
                <Button title="Transaction"   color = "#12356e" /></View>
                <View style={styles.butt}>
                <Button title="Update Profile"   color = "#12356e" /></View>
            </View>
            </Card>
            <View style = {styles.button} >
        <Button color='red' title="Logout" onPress={() =>{
                            props.navigation.navigate({routeName:'Login'})
                        } } />
        </View>
        </View>
        
    </View>

  );
}

const styles = StyleSheet.create({
  screen: {
   paddingVertical:'17%',
   paddingHorizontal:'8%',
    
  },
  butt:{
      padding:5,
      margin:11
  },
  button: {
        
        alignSelf:'center',
          width: 80,
          marginBottom:20,
          marginTop:10
      },
});
export default DashBoard;