import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Front from '../pages/Front';
import Profile from '../pages/Profile';
import About from '../pages/About';
import Transport from '../pages/Transport';
import Edit from '../pages/Edit';
import Service from '../pages/Service';
import Detail from '../pages/Detail';
import {SignIn} from '../pages';
import Bill from '../pages/Bill';
import Cost from '../pages/Cost';
import EditBill from '../pages/EditBill';




const Stack = createNativeStackNavigator();

export default function Router() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Front" component={Front} />
      <Stack.Screen name="Bill" component={Bill} />
      <Stack.Screen name="Profile" component={Profile} />
      <Stack.Screen name="About" component={About} />
      <Stack.Screen name="Transport" component={Transport} />
      <Stack.Screen name="Service" component={Service} />
      <Stack.Screen name="MyStack" component={MyStack} />
      <Stack.Screen name="MyDrawer" component={MyDrawer} />
      <Stack.Screen name="Biaya" component={Biaya} />
      <Stack.Screen name="Update" component={Update} />
    </Stack.Navigator>
  );
}

const MyDrawer = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Service"
        component={Service}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const MyStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transport"
        component={Transport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit"
        component={Edit}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Biaya = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Transport"
        component={Transport}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Cost"
        component={Cost}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const Update = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Bill"
        component={Bill}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="EditBill"
        component={EditBill}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
