import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionProps {
  type: "positive" | "negative";
}

export const Container = styled.ScrollView`
  margin-bottom: 16px;
  padding: 17px 24px;

  border-radius: 5px;

  background-color: ${({ theme }) => theme.colors.shape};
`;

export const Amount = styled.Text<TransactionProps>`
  margin-top: 2px;

  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;

  color: ${({ theme, type }) =>
    type === "positive" ? theme.colors.success : theme.colors.attention};
`;

export const Category = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const CategoryName = styled.Text`
  margin-left: 17px;

  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Date = styled.Text`
  margin-left: 17px;

  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 19px;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(14)}px;

  color: ${({ theme }) => theme.colors.text};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
