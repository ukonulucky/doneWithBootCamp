import {  createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import ListingEditScreen from "../screens/ListingEditScreen"

import FeatureNavigator from "./FeatureNavigator"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import NewListingButton from "../components/NewListingButton"
import {View, Text} from "react-native"
import AccountScreen from "../screens/AccountScreen"




const Tab = createBottomTabNavigator()


const AppNavigator = () => (
    <Tab.Navigator
     screenOptions={{
        headerShown: false
     }}
    >
        <Tab.Screen name="Feature" component={FeatureNavigator} 
        options={{
            tabBarIcon : ({size, color}) => <MaterialCommunityIcons size={size} color={color} name="home" />,
            
        }}
        /> 
        <Tab.Screen name="ListingEdit" component={ListingEditScreen}
        options={({navigation}) => (
        
                {
            tabBarButton: () => (<NewListingButton  size={40} color={"#eeee"} name="plus-circle"  onPress={() => navigation.navigate("ListingEdit")} />),
                    
                     tabBarIcon : ({size, color}) => <MaterialCommunityIcons size={size} color={color} name="plus-circle" />,
                 
                }
            
        )}
        /> 
        <Tab.Screen name="Account" component={AccountScreen} 
        options={{
            tabBarIcon: ({size, color}) => <MaterialCommunityIcons  size={size} color={color} name="account" />
        }}
        
        /> 
    </Tab.Navigator>
)


export default AppNavigator