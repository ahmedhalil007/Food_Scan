import * as React from 'react';
import {createNavigatorFactory, NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Home';
import SignUp from './src/SignUp';
import LogIn from './src/LogIn';
import Category from './src/Category'
import Welcome from './src/Welcome';
import ScanBarcode from './src/ScanBarcode';
import NutValue from './src/NutValue';
import Recipes from './src/Recipes';
import ForgotPassword from './src/ForgotPassword';
import Meals from './src/Meals';




  const Stack = createNativeStackNavigator();

 function App() { 
  return (
    <NavigationContainer>
       <Stack.Navigator screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="LogIn" component={LogIn} />
        <Stack.Screen name="Category" component={Category} />
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="ScanBarcode" component={ScanBarcode} />
        <Stack.Screen name="NutValue" component={NutValue} />
        <Stack.Screen name="Recipes" component={Recipes} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Meals" component={Meals} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;