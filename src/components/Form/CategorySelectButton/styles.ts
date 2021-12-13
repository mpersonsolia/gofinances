import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled(RectButton).attrs({
  activeOpacity: 0.7,
})`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 16px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Category = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;

  color: ${({ theme }) => theme.colors.text};
`;
