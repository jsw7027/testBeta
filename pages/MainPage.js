import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Image, ListView} from 'react-native' ; 
import { Button, StyleSheet, RefreshControl,Text, TextInput,TouchableOpacity, View,FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


  

const Stack = createStackNavigator();





export default function MainPage({navigation,route}) {


        /////////////////////////// Flat List Format///////////////////
      
        const ItemSeparatorView = () => {
          return (
            //Item Separator
            <View
              style={{ height: 0.5, width: '100%', backgroundColor: '#C8C8C8' }}
            />
          );
        };
      
        const ItemView = ({ item }) => {
      
          return (
            // Single Comes here which will be repeatative for the FlatListItems
            <View flexDirection="row" style={{backgroundColor:"white"}}>
              <Image 
                  source={require('/Users/seungwanjung/firstRN/assets/logo.png')}
                  style={styles.searchImg}/>
              <Text style={styles.item} onPress={()=>getItem(item) } >
                {item.userID}
              </Text>
            </View>
          );
        };
      
        const getItem = (item) => {
          navigation.navigate('SearchPage',
                                {"searchKey":item.userID,
                                  "userID": userID})
        };
      
        /////////////// DATA ////////////////////
      
        const devMenu =[
          {userID: "test", userPW: "1234"},
          {userID: "test2", userPW: "1111"},
          {userID: "test3", userPW: "1234"},
          {userID: "admin", userPW: "1234"},
        ]
      
        const startupMenu =[
          {userID: "SW Corp.", userPW: "1234"},
          {userID: "Test Corp.", userPW: "1111"},
          {userID: "Other Corp.", userPW: "1234"},
          {userID: "Nice Corp.", userPW: "1234"},
          {userID: "Nice Corp.", userPW: "1234"},
        ]
        const [data, setData] = useState(devMenu);
        const {userID} = route.params;

        const[listItem, setListItem] = useState(data);
        const [refreshing, setRefreshing] = React.useState(false);
      
        ///////////Main View ////////////////////////
      
        function wait(timeout) {
          return new Promise(resolve => {
            setTimeout(resolve, timeout);
          });
        }
      
        function goToMenu(data){
          setRefreshing(true);
          setData(data);
          setListItem(data);
          wait(500).then(() => setRefreshing(false));
          
        }
      
        return(
          <View style={{flex:1}}>
          <View style={styles.studyMenu}>
            <Text style={styles.studyOpt} onPress={()=>{goToMenu(devMenu)}}> Dev |</Text>
            <Text style={styles.studyOpt} onPress={()=>{goToMenu(startupMenu)}}> Startup   | </Text>
            <Text style={styles.studyOpt}> Certifi.  |</Text>
            <Text style={styles.studyOpt}>Company   |</Text>
          </View>
      
            <Text style={{fontSize:20, backgroundColor:"white", paddingTop:20, paddingLeft:15}}>Your Search List: </Text>
      
      
            <FlatList
                data={listItem}
      
                ItemSeparatorComponent={ItemSeparatorView}
                renderItem={ItemView}
                keyExtractor={(item, index) => index.toString()}
                refreshControl={<RefreshControl refreshing={refreshing} onRefresh={goToMenu} />}
              />
      
      
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
      
      
      