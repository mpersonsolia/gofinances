import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Category = styled.View``;

export const FlatList = styled.Text``;

export const Header = styled.View`
  height: ${RFValue(113)}px;
  width: 100%;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled(Feather)``;

export const Name = styled.Text``;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  height: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};
`;
