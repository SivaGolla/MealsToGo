import { Searchbar, ActivityIndicator, Colors } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utils/SafeArea";
import styled from "styled-components/native";
import { FlatList } from "react-native";
import { RestaurantsContext } from "../../../../src/services/restaurants/restaurants.context";
import { useContext } from "react";
import { Spacer } from "../../../components/Spacer";

const SearchBarContainerView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchResultsContainerView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;

export const RestaurantsPage = () => {
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);

  return (
    <SafeArea>
      <SearchBarContainerView>
        <Searchbar />
      </SearchBarContainerView>
      <RestaurantList
        data={restaurants}
        renderItem={({ item }) => {
          return (
            <Spacer position="bottom" size="large">
              <RestaurantInfoCard restaurant={item} />
            </Spacer>
          );
        }}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
