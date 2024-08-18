import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/RestaurantInfoCard";
import { SafeArea } from "../../../components/utils/SafeArea";
import styled from "styled-components/native";

const SearchBarContainerView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => props.theme.colors.bg.primary};
`;

const SearchResultsContainerView = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export const RestaurantsPage = () => {
  return (
    <SafeArea>
      <SearchBarContainerView>
        <Searchbar />
      </SearchBarContainerView>
      <SearchResultsContainerView>
        <RestaurantInfoCard />
      </SearchResultsContainerView>
    </SafeArea>
  );
};
