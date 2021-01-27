import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Image, ListView} from 'react-native' ; 
import { Button, StyleSheet, RefreshControl,Text, TextInput,TouchableOpacity, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


  

const Stack = createStackNavigator();





export default function QnAPage({navigation}){

    return(
      <View style={{flex:1,
        justifyContent: 'space-between',}}>
  
  
      <View>
        <Text style={styles.QnAHeader}>QnA</Text>
        <View style={{
              marginTop:20,
              borderBottomColor: 'blakc',
              borderBottomWidth: 1,
            }}/>
      </View>
  
  
  
  <View>
      <View style={{
              borderBottomColor: '#D5D5D5',
              borderBottomWidth: 1,
            }}/>
   <View style={styles.mainMenu}> 
        
        <TouchableOpacity onPress={() => navigation.navigate("MainPage")} style={styles.flex}>
          <Text style={styles.buttonText}>Study</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => alert('Not Supported Option')} style={styles.flex}>
          <Text style={styles.buttonText}>Chatting</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={()=>navigation.navigate("QnAPage")} style={styles.flex}>
          <Text style={styles.buttonText}>QnA</Text>
        </TouchableOpacity>
  
        <TouchableOpacity onPress={() => alert('Not Supported Option')} style={styles.flex}>
          <Text style={styles.buttonText}>My</Text>
        </TouchableOpacity>
  
       </View>
   </View>
  
      </View>
  
    )
  }


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
  
    },
  
    searchImg: {
      width:50,height:40,
        marginTop:30,
        marginBottom:30,
      marginLeft:10,
    },
  
    flex: {
        flex:1,
        borderRadius: 5,
        paddingTop:8,
      paddingBottom:8,
      backgroundColor:'white'
    },
  
    buttonText: {
      fontSize:20,
      textAlign:"center",
      color:'#747474'
      
    },
  
    mainMenu: {
      flexDirection: "row"
      
    },
  
    studyMenu: {
      flexDirection:"row",
      paddingTop:15,
      paddingBottom:15,
      alignItems: "center",
      backgroundColor:"#F4A460"
    },
  
    studyOpt: {
      color:"#EAEAEA",
      paddingLeft:10,
      paddingRight:10,
      fontSize: 20,
  
    },
  
    chatInput:{
      width:302,
      height:40,
      backgroundColor:"#e8e8e8",
      marginLeft:2,
      marginRight:2,
      paddingLeft:15
    },
  
    input: {
      width: 250,
      height: 44,
      marginLeft:20,
      padding: 10,
      marginTop: 20,
      marginBottom: 10,
      backgroundColor: '#e8e8e8'
    },
    header: {
      paddingLeft:20,
      fontSize: 24,
      color: "#CD853F"
    },
    lineStyle:{
      marginTop:50,
      borderBottomColor: 'black',
      borderBottomWidth: 1,
    },
    chat:{
      fontSize:18,
      marginLeft: 10,
      marginTop:12,
      marginBottom:15,
      fontWeight:"bold" 
  
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
      marginTop:30,
      marginBottom:30,
      marginLeft:10,
    },
  
    QnAHeader: {
      paddingLeft:20,
      fontSize: 24, 
      fontWeight:"bold", 
      color: "#CD853F", 
      textAlign:"center", 
      paddingTop:20}
  });
  
  
  