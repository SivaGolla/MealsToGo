import React from "react";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utils/SafeArea";

export const RestaurantDetailView = ({ route }) => {
  const { restaurant } = route.params;

  return (
    <SafeArea>
      <RestaurantInfoCard restaurant={restaurant} />
    </SafeArea>
  );
};
