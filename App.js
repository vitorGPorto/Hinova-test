import React from "react";

import { StatusBar } from 'expo-status-bar';

import ToBarRoute from "./src/routes/toBar.routes";
import StackRouter from "./src/routes/stack.routes";
 import {NavigationContainer} from "@react-navigation/native"

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar 
      backgroundColor="#38A69D" 
      barStyle="light-content" 
      />
      <StackRouter/>
    </NavigationContainer>
  );
}
