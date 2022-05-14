import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cores from "../constantes/Cores";
import DetalhesDoLugarTela from "../telas/DetalhesDoLugarTela";
import ListaDeLugaresTela from "../telas/ListaDeLugaresTela";
import MapaTela from "../telas/MapaTela";
import NovoLugarTela from "../telas/NovoLugarTela";

const Stack = createNativeStackNavigator()

const container = (
    <NavigationContainer>
        <Stack.Navigator
            initialRouteName="ListaDeLugares"
            screenOptions={{
                headerStyle: {backgroundColor: Cores.primary},
                headerTintColor: 'white'
            }}>
            <Stack.Screen name="DetalhesDoLugar" component={DetalhesDoLugarTela}></Stack.Screen>
            <Stack.Screen name="ListaDeLugares" component={ListaDeLugaresTela}></Stack.Screen>
            <Stack.Screen name="Mapa" component={MapaTela}></Stack.Screen>
            <Stack.Screen name="NovoLugar" component={NovoLugarTela}></Stack.Screen>
        </Stack.Navigator>
    </NavigationContainer>
)

export default container