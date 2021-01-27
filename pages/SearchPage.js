import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Image, ListView} from 'react-native' ; 
import { Button, StyleSheet, RefreshControl,Text, TextInput,TouchableOpacity, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


  

const Stack = createStackNavigator();





export default function SearchPage({navigation,route}){

    /////////////////////////// Flat List Format///////////////////
 
    const ItemSeparatorView = () => {
        return (
          //Item Separator
          <View
            style={{ }}
          />
        );
      };
    
      const ItemView = ({ item }) => {
    
        return (
          // Single Comes here which will be repeatative for the FlatListItems
          <View flexDirection="row" style={{backgroundColor:"white"}}>
            <Text style={styles.chat} >
               {item.userId}  :  {item.chat}
            </Text>
          </View>
        );
      };
    
     
    
      /////////////// DATA ////////////////////
      const {searchKey} = route.params;
      const {userID} = route.params;
      var userIDStr = JSON.stringify(userID);
      const [chatType, setChatType] = useState('');
      const chatJSON = [
        {userId: userIDStr, chat:"start"},
        {userId: userIDStr, chat:"start"}
      ]
      
      var data = chatJSON;
      const[listItem, setListItem] = useState(data);
      const [refreshing, setRefreshing] = React.useState(false);
    
     
    
      function wait(timeout) {
        return new Promise(resolve => {
          setTimeout(resolve, timeout);
        });
      }
    
      function sendChat(userID,chat){
        setRefreshing(true);
        chatJSON.push({userId: userID, chat: chat});
        data = chatJSON;
        setListItem(data);
        wait(500).then(() => setRefreshing(false));
        
      } 
    
    
 
   return(
     
   <View style={{
     flex: 1,
     flexDirection: 'column',
     justifyContent: 'space-between',
     backgroundColor: "white"
   }}>
     <View style={{backgroundColor:"#ffd3ae"}}>
       <Text style={{fontSize:20, textAlign:"center", marginTop:12}}>StudyGroup Name: {JSON.stringify(searchKey)}</Text>
       <View style={{borderBottomColor: '#D5D5D5', borderBottomWidth: 1, paddingBottom:10}}/>
     </View>
 
 
 
 <FlatList
           data={listItem}
 
           ItemSeparatorComponent={ItemSeparatorView}
           renderItem={ItemView}
           keyExtractor={(item, index) => index.toString()}
           refreshControl={<RefreshControl refreshing={refreshing} onRefresh={sendChat} />}
         />
 
 
 <View>
   <View style={{backgroundColor:"white", flexDirection:"row"}}>
   <Button title="   +   "></Button>
     <TextInput 
       value={chatType}
       onChangeText={(chatType)=>setChatType(chatType)}
       placeholder="TYPE CHAT"
       style={styles.chatInput}></TextInput>
     <Button title=" send " onPress={()=>{sendChat(userID,chatType)}}></Button>
   </View>
 
 
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
  
  
  