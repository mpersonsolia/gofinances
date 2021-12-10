import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface CategoryProps {
  isActive: boolean;
}

export const Container = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Category = styled.TouchableOpacity<CategoryProps>`
  width: 100%;

  align-items: center;
  flex-direction: row;
  padding: ${RFValue(15)}px;

  background-color: ${({ isActive }) =>
    isActive ? theme.colors.secondary_light : theme.colors.background};
`;

export const Footer = styled.Text`
  width: 100%;
  padding: 24px;
`;

export const Header = styled.View`
  height: ${RFValue(113)}px;
  width: 100%;

  align-items: center;
  justify-content: flex-end;
  padding-bottom: 19px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled(Feather)`
  margin-left: 16px;
  font-size: ${RFValue(20)}px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;

  background-color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  height: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};
`;
