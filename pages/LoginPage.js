import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Image, ListView} from 'react-native' ; 
import { Button, StyleSheet, RefreshControl,Text, TextInput,TouchableOpacity, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


  

const Stack = createStackNavigator();





export default function LoginPage({navigation}) {


        const [userName,setUserName] = useState('');
        const [passWord,setPassWord]= useState('');
      
        const userJSON =[
          {userID: "test", userPW: "1234"},
          {userID: "test2", userPW: "1111"},
          {userID: "test3", userPW: "1234"},
          {userID: "admin", userPW: "1234"},
        ]
        
        const id=["test","test1","test2","admin"];
      
        const pw = ["1234"];
      
        function logInAuth(){
          for(var i=0; i<id.length; i++){
              if(userName===id[i]){
                if(passWord===pw[0]){
                alert("loginSuccess welcome "+userName);
                
                }
              }
          }
        
      }
      
      function logInAuthJson(){
        
        var loginCheck = false;
          for(var key in userJSON){
            if(userName===userJSON[key].userID){
              if(passWord===userJSON[key].userPW){
                loginCheck = true;
              }
            }
          }
          if(loginCheck===true){
            alert("welcome "+userName);
            navigation.navigate('MainPage',{"userID":userName})
            
          }else{
            alert("login failed");
          }
      }
      
        return (
      
          <View style={styles.container}>
            <View style={{ flexDirection: 'row',marginTop:3}}>
              <Image 
                source={require('/Users/seungwanjung/firstRN/assets/logo.png')}
                style={{width:40,height:40,
                marginLeft:10,}}/>
              <Text style={{marginLeft:20, marginTop:2, fontSize:23,fontWeight:'bold'}}>
                  Jung's Study Group
              </Text>
            </View>
            
      
            <View
                style={{
                  marginTop:10,
                  borderBottomColor: 'black',
                  borderBottomWidth: 1,
                }}
              />
            <Image
              style={{width:450,marginTop:20 ,height:250}}
              source={require('/Users/seungwanjung/firstRN/assets/1.jpg')}
              />
              <View
                style={styles.lineStyle}
              />
              <Text style={{fontSize:30, color:'#CD853F', paddingTop:10,paddingLeft:20 ,paddingBottom:25}}>
                Weclome to Study Group{'\n'}
                Log In
              </Text>
              
            <TextInput
            value={userName}
            onChangeText={(userName)=>setUserName(userName)}
            placeholder={'User ID'}
            style={styles.input}
          />
          
          <TextInput
            value={passWord}
            secureTextEntry={true}
            placeholder={'User PW'}
            onChangeText={(passWord)=>setPassWord(passWord)}
            style={styles.input}
          />
          <Text></Text>
          <Button 
            title="login"
            onPress={logInAuthJson}
            style={{marginTop:30, width:100}}
            />
      
          </View>
        );
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
      
      
      