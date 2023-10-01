import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/user/login";
import Welcome from "../screens/welcome";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Register from "../screens/user/register";
import { AuthProvider } from "../context/authContext";
import Home from "../screens/home";
import Header from "../components/header";
import Farm from "../screens/farm";
import DrugStore from "../screens/drugStore";
import Flock from "../screens/flock";
import Vaccine from "../screens/vaccine";

const Stack = createNativeStackNavigator();

export function AppRoutes() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator
          initialRouteName="welcome"
          screenOptions={{ headerShown: false }}
        >
          <Stack.Screen name="welcome" component={Welcome} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen
            name="home"
            component={Home}
            options={{
              headerShown: true,
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="farm"
            component={Farm}
            options={{
              headerShown: true,
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="drugstore"
            component={DrugStore}
            options={{
              headerShown: true,
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="flock"
            component={Flock}
            options={{
              headerShown: true,
              header: () => <Header />,
            }}
          />
          <Stack.Screen
            name="vaccine"
            component={Vaccine}
            options={{
              headerShown: true,
              header: () => <Header />,
            }}
          />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  );
}
