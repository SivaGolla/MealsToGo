import React, { useEffect, useState, useContext } from "react";
import { SafeArea } from "../../../components/utils/SafeArea";
import styled from "styled-components/native";
import MapView, { Marker } from "react-native-maps";
import { SearchView } from "../components/search.map.view";
import { LocationContext } from "../../../services/location/location.context";
import { RestaurantsContext } from "../../../services/restaurants/restaurants.context";

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;

export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants = [], isLoading, error } = useContext(RestaurantsContext);

  const [latDelta, setLatDelta] = useState(0);
  const { lat, lng, viewport } = location;

  useEffect(() => {
    const latNorthEast = viewport.northeast.lat;
    const latSouthWest = viewport.southwest.lat;
    setLatDelta(latNorthEast - latSouthWest);
  }, [location, viewport]);

  return (
    <>
      <SafeArea>
        <SearchView />
        <Map
          region={{
            lattitude: lat,
            longitude: lng,
            lattitudeDelta: latDelta,
            longitudeDelta: 0.1,
          }}
        >
          {restaurants.map((restaurant) => {
            return (
              <Marker
                key={restaurant.name}
                title={restaurant.name}
                coordinate={{
                  lattitude: restaurant.geometry.location.lat,
                  longitude: restaurant.geometry.location.lng,
                }}
              ></Marker>
            );
          })}
        </Map>
      </SafeArea>
    </>
  );
};
