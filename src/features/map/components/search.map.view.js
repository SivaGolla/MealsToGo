import React, { useContext, useState, useEffect } from "react";
import { Searchbar } from "react-native-paper";
import styled from "styled-components/native";
import { LocationContext } from "../../../services/location/location.context";

const SearchBarContainerView = styled.View`
  padding: ${(props) => props.theme.space[3]};
  background-color: ${(props) => "white"};
  positin: absolute;
  z-index: 999;
  width: 100%;
`;

export const SearchView = () => {
  const { keyword, search } = useContext(LocationContext);
  const [searchKeyword, setSearchKeyword] = useState(keyword);

  console.log("keyword: " + keyword);
  useEffect(() => {
    setSearchKeyword(keyword);
  }, [keyword]);

  return (
    <SearchBarContainerView>
      <Searchbar
        placeholder="Search a location.."
        icon="map"
        value={searchKeyword}
        onSubmitEditing={() => {
          search(searchKeyword);
        }}
        onChangeText={(textInput) => {
          setSearchKeyword(textInput);
        }}
      />
    </SearchBarContainerView>
  );
};
