import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from "../pages/home";
import Detalhes from "../pages/detalhes";
import EnviarIdicacao from "../pages/enviarIdicacao"

const Stack = createNativeStackNavigator();

function StackRouter(){
    return(
        <Stack.Navigator>
            <Stack.Screen
            name="Home"
            component={Home}
            options={
                {
                    headerShown: false
                }
            }
            />
            <Stack.Screen
            name="EnviarIdicacao"
            component={EnviarIdicacao}
            options={
                {
                    headerShown: false
                }
            }
            />

            <Stack.Screen
            name="Detalhes"
            component={Detalhes}
            options={
                {
                    headerShown: false
                }
            }
            />
        </Stack.Navigator>
    )
}

export default StackRouter;