import  React, {useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity,ScrollView} from 'react-native';
import Background from './Bckgrnd';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { orange, red } from './Constants';


const NutValue = (props) => {

  const handlePress = () => {
    props.navigation.navigate("Recipes");
  }
  
  const[show, setShow] = useState(true)
  const[sshow,ssetShow] = useState(true)
  
    return (

      <Background>
       <ScrollView contentContainerStyle={styles.scrollViewContent}>
         <View style={styles.container1}>
         <Text style={{color:"#ff5757", fontSize:35, bottom:-35, fontWeight:'bold'}}>Nutritional value</Text>
         </View>
         <Image source={require('./assets/kokosulje.png')} style={styles.picture}/>

         
         <View style={{marginBottom:20}}>

         <View style={{ 
         width:350,
         backgroundColor:orange,
         borderRadius:13,
        }}>
         <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}} onPress={() => setShow(!show)}>
           <Ionicons
             name='ellipsis-horizontal-circle-sharp'
             style={{ color: "#ff5757", fontSize: 60,  marginLeft:80 }}
           
           />
          <Text style={{ marginLeft: 10, fontSize:30,color:red, fontWeight:'bold' }}>Details</Text>

           </TouchableOpacity>
         </View>
         {
          show ? <User /> : null
         }
       </View>



       <View style={{marginBottom:20}}>
         <View style={{ flexDirection: 'row', 
         alignItems: 'center',
         width:350,
         backgroundColor:orange, 
         borderRadius:13,}}>
         <TouchableOpacity style={{flexDirection: 'row', alignItems:'center'}} onPress={() => ssetShow(!sshow)}>
           <Ionicons
             name='location-sharp'
             style={{ color: "#ff5757", fontSize: 60, marginLeft:70 }}
           />
          <Text style={{ marginLeft: 10, fontSize:30, color:red, fontWeight:'bold'}}>Locations</Text>
          </TouchableOpacity>
        </View>
       {
        sshow ? <Userr /> : null
       }
       </View>
         </ScrollView>

         <TouchableOpacity onPress={handlePress}>
         <View style={styles.container2}>
         <Text style={{color:'#41644A', fontSize:30, fontWeight:'bold', marginRight: 30,}}>View Recipes</Text>
         <AntDesign name='arrowright' text='Details' style={{color: '#41644A', fontSize:30, }}/>
         </View>
         </TouchableOpacity>
      </Background>
    );
  
  }

  const User=()=>{
    return (
      <View style={{width:350, height:250,backgroundColor:orange, borderRadius:15, opacity:0.8, justifyContent:'center', marginTop:10,}}>
        <Text style={styles.text}>Energy value    862kCaal</Text>
        <Text style={styles.text}>Proteins                   0g</Text>
        <Text style={styles.text}>Carbohydrates      0g </Text>
        <Text style={styles.text}>Sugar                        0g</Text>
        <Text style={styles.text}>Fibers                       0g</Text>
        <Text style={styles.text}>Fats                         100g</Text>
      </View>
    )
  }

  const Userr=()=>{
    return (
      <View style={{width:350, height:150,backgroundColor:orange, borderRadius:15, opacity:0.8, justifyContent:'center',  marginTop:10,}}>
        <Text style={styles.text}>Mercator Ložionička - Ložionička 16</Text>
        <Text style={styles.text}>Bingo City Center - Džemala Bijedića 160</Text>
      </View>
    )
  }

  const styles = StyleSheet.create({
    scrollViewContent: {
      flexGrow: 1,
      alignItems: 'center',
      
    },
    container1: {
     borderBottomEndRadius:30,
     borderBottomStartRadius:30,
     backgroundColor:'#f8dead',
     width:420,
     height:80,
     alignItems:'center',
    },
    picture: {
      alignItems: 'center',
      width: 400,
      height:400,
      resizeMode: 'stretch',
    },
    container2: {
      borderTopEndRadius:30,
      borderTopStartRadius:30,
      backgroundColor:'#f8dead',
      width:420,
      height:80,
      alignItems:'center',
      opacity:0.7,
      top:175,
      flexDirection: 'row',
      justifyContent:'center',
     
    
     },
     text:{
      fontSize:20, 
      marginLeft:10,
      marginBottom:10,
     }
 })

 export default NutValue;