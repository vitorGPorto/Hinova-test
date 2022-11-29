import{createBottomTabNavigator} from '@react-navigation/bottom-tabs'

import Home from '../pages/home'
import Detalhes from '../pages/detalhes'
import EnviarIdicacao from '../pages/enviarIdicacao'
import StackRouter from '../routes/stack.routes'


import {Ionicons} from '@expo/vector-icons'
const Tab = createBottomTabNavigator();

function ToBarRoute(){

    return(
        <Tab.Navigator
        screenOptions={{
            tabBarActiveTintColor:'#38a69d',
            tabBarInactiveTintColor: '#FFF',
            tabBarStyle:{
                position: 'absolute',
                backgroundColor:'#373737',
                borderTopWidth: 0,
                bottom: 14,
                left:14,
                right: 14,
                elevation: 0,
                borderRadius: 4,
                height: 60

            }
        }}
        >
            <Tab.Screen 
            name='Inicio'
            component={Home}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused})=>{
                    if(focused){
                        return <Ionicons name='home'
                        size={size} color={color}/>
                    }
                    return <Ionicons name='home-outline'
                    size={size} color={color}/>
                }
            }}
            />
            <Tab.Screen 
            name='EnviarIdicacao'
            component={EnviarIdicacao}
            options={{
                headerShown: false,
                tabBarIcon: ({color, size, focused})=>{
                    if(focused){
                        return <Ionicons name='person'
                        size={size} color={color}/>
                    }
                    return <Ionicons name='person-outline'
                    size={size} color={color}/>
                }
            }}
            />
            
           
            
        </Tab.Navigator>
    )
}

export default ToBarRoute;