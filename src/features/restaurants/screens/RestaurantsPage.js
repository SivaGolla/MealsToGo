import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utils/SafeArea";
import styled from "styled-components/native";
import { FlatList } from "react-native";

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
  return (
    <SafeArea>
      <SearchBarContainerView>
        <Searchbar />
      </SearchBarContainerView>
      <RestaurantList
        data={[
          { name: 1 },
          { name: 2 },
          { name: 3 },
          { name: 4 },
          { name: 5 },
          { name: 6 },
          { name: 7 },
          { name: 8 },
          { name: 9 },
          { name: 10 },
          { name: 11 },
          { name: 12 },
          { name: 13 },
          { name: 14 },
          { name: 15 },
          { name: 16 },
        ]}
        renderItem={() => <RestaurantInfoCard />}
        keyExtractor={(item) => item.name}
      />
    </SafeArea>
  );
};
