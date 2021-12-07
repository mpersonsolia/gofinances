import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  width: ${RFValue(300)}px;

  margin-right: 16px;
  padding: 19px 23px;
  padding-bottom: ${RFValue(42)}px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Amount = styled.Text`
  margin-top: 38px;

  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Footer = styled.View``;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
`;

export const LastTransaction = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  color: ${({ theme }) => theme.colors.text_dark};
`;
