import  React from 'react';
import {Text,StyleSheet, View} from 'react-native';
import Background from './Bckgrnd';
import Form from './Form';
import Button from './Button1';
import { orange, red } from './Constants';



const ForgotPassword = (props) => {
    return (
      <Background>
         <View style={styles.container1}>
         <Text style={{top:300, fontSize:20, color:"#F2F2F2", alignItems: 'center'}}>
         Please enter your registered email to receive password reset link...</Text> 
         <View style={{top:60,}}>
         <Form placeholder="Email / Username" keyboardType={'email-address'}/>
         </View>
         </View>
         <View style={styles.btn}>
            <Button textColor='#ff5757' bgColor={orange} btnLabel="Reset Password" Press={() => props.navigation.navigate("LogIn")}/>
         </View>
       
      </Background>
    );
  
  }
  const styles = StyleSheet.create({
     container1: {
      borderBottomEndRadius:30,
      borderBottomStartRadius:30,
      backgroundColor:'#f8dead',
      width:420,
      height:80,
      alignItems:'center',
     },
     btn: {
       bottom:-530, 
       
       }
   
  })
  
  export default ForgotPassword;