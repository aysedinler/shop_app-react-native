import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Products from './src/pages/products/Products';
import Detail from './src/pages/detail/Detail';
import config from './config';

const Stack = createNativeStackNavigator()
export default function Router() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="ProductsPage" component={Products} options={{
          title: "AyşeShop",
          headerStyle: { backgroundColor: "#64b5f6" },
          headerTitleStyle: { color: "white" }
        }} />

        <Stack.Screen name="DetailPAge" component={Detail} options={{
          title: "Ürün detay",
          headerStyle: { backgroundColor: "#64b5f6" },
          headerTitleStyle: { color: "white" },
          headerTintColor: "white",
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

