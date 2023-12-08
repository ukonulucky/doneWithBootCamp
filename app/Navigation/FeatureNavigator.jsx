import { createNativeStackNavigator} from "@react-navigation/native-stack"
import ListingsScreen from "../screens/ListingsScreen"
import ListingDetailsScreen from "../screens/ListingDetailsScreen"


const Stack = createNativeStackNavigator()

const FeatureNavigator = () => (
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }}
    >
        <Stack.Screen  component={ListingsScreen}   name="Listing" />
        <Stack.Screen component={ListingDetailsScreen} name="ListingDetails" options={{
            animation:"slide_from_bottom"
        }} />
    </Stack.Navigator>
)

export default FeatureNavigator