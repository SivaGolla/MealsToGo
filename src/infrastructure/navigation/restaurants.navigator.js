import React from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import { RestaurantsPage } from "../../features/restaurants/screens/RestaurantsPage";
import { RestaurantDetailView } from "../../features/restaurants/screens/RestaurantDetailView";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      headerMode="none"
      screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
    >
      <RestaurantStack.Screen name="Restaurants" component={RestaurantsPage} />

      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={RestaurantDetailView}
      />
    </RestaurantStack.Navigator>
  );
};
