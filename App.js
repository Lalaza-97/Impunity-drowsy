import * as React from 'react';
import { Text, View ,Button, StyleSheet,  } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.RectangleShapeView}>
        <Text style={styles.baseText}><h2>Welcome to Impunity!</h2></Text>
        <Button  
          title="Continue" 
          color= "#FFC107">
        </Button> 
      </View>     
    </View>
  );
}

function SettingsScreen() {
  return (
    <View >
      <Text>Settings!</Text>
      <View style={styles.Navbar}>
        <Text><h2>App Preference</h2></Text>
        <Text><h2>Notifications</h2></Text>
        <Text><h2>Sound</h2></Text>
        <Text><h2>Color Settings</h2></Text>
      </View>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  
  container: {
    flex: 1, 
    backgroundColor: "white",
    justifyContent: 'center', 
    alignItems: 'center'
  },

 baseText: {
   fontFamily: "roboto",
   color: "white"
 },

  RectangleShapeView: {
    marginTop:20,
    width: 120 * 2,
    height: 120,
    backgroundColor: '#00022e',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  Navbar: {
    width: 700 * 2,
    height: 90,
    backgroundColor: '#00022e',
  }
});
