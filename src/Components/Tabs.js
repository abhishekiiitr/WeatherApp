import React from 'react'
import City from '../Screen/City'
import CurrentWeather from '../Screen/CurrentWeather'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import UpcomingWeather from '../Screen/UpcomingWeather'
import { Feather } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const Tabs = ({weather}) => {

    return (
        <Tab.Navigator screenOptions={
            {
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'grey',
                tabBarStyle : {
                    backgroundColor : 'lightblue'
                },
                headerStyle : {
                    backgroundColor:'lightblue',
                },
                headerTitleStyle : {
                    fontSize:25,
                    fontWeight:'bold',
                   
                }
            }
        }
        >
            <Tab.Screen name={'Current'}  options={
                {
                    tabBarIcon: ({ focused }) => (
                        <Feather name={'droplet'} size={25} color={focused ? 'tomato' : 'grey'} />
                    )
                }
            }
            >
                {()=> <CurrentWeather weatherData={weather.list[0]} />}

            </Tab.Screen>

            
            <Tab.Screen name={'UpComing'} options=
                {
                    {
                        tabBarIcon: ({ focused }) => (
                            <Feather name={'clock'} size={25} color={focused ? 'tomato' : 'grey'} />
                        )
                    }
                }
            >
                {()=> <UpcomingWeather weatherData={weather.list} />}
            </Tab.Screen>

            <Tab.Screen name={'City'}
                options={
                    {
                        tabBarIcon: ({ focused }) => (
                            <Feather name={'home'} size={25} color={focused ? 'tomato' : 'grey'} />
                        )
                    }
                }
            >
                {()=> <City weatherData={weather.city}/> }
            </Tab.Screen>
        </Tab.Navigator>

    )
}

export default Tabs