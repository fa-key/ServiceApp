import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, TambahKontak} from '../pages';
import Front from '../pages/Front';
import Profile from '../pages/Profile';
import About from '../pages/About';
import Transport from '../pages/Transport';
import Edit from '../pages/Edit';
import Service from '../pages/Service';
import Detail from '../pages/Detail';



const Stack = createNativeStackNavigator();

export default function Router(){
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Front"
        component={Front}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TambahKontak" component={TambahKontak} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Transport" component={Transport} />
      <Stack.Screen name="Service" component={Service} />
      <Stack.Screen name="MyStack" component={MyStack} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
    </Stack.Navigator>
  );
};

const MyDrawer=()=> {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Service" component={Service} options={{headerShown: false}}/>
      <Stack.Screen name="Detail" component={Detail} options={{headerShown: false}} />
    </Stack.Navigator>
  
  );
}

const MyStack=()=> {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Transport" component={Transport} options={{headerShown: false}}/>
      <Stack.Screen name="Edit" component={Edit} options={{headerShown: false}} />
    </Stack.Navigator>
  
  );
}

