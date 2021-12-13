import styled from "styled-components/native";
import { BorderlessButton } from "react-native-gesture-handler";
import { Feather } from "@expo/vector-icons";
import { FlatList, FlatListProps } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

import { DataListProps } from ".";

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  height: ${RFPercentage(42)}px;
  width: 100%;

  align-items: flex-start;
  flex-direction: row;
  justify-content: center;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const HighlightCards = styled.ScrollView.attrs({
  contentContainerStyle: { paddingHorizontal: 24 },
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  width: 100%;

  margin-top: ${RFPercentage(20)}px;
  position: absolute;
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;

  color: ${({ theme }) => theme.colors.secondary};
`;

export const LogoutButton = styled(BorderlessButton)``;

export const Photo = styled.Image`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;

  border-radius: 10px;
`;

export const Title = styled.Text`
  margin-bottom: 16px;

  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Transactions = styled.View`
  flex: 1%;
  margin-top: ${RFPercentage(12)}px;
  padding: 0 24px;
`;

export const TransactionList = styled(
  FlatList as new (
    props: FlatListProps<DataListProps>
  ) => FlatList<DataListProps>
).attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { paddingBottom: 10 },
})``;

export const User = styled.View`
  margin-left: 17px;
`;

export const UserGreeting = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const UserInfo = styled.View`
  align-items: center;
  flex-direction: row;
`;

export const UserName = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(18)}px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const UserWrapper = styled.View`
  width: 100%;

  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  margin-top: ${getStatusBarHeight() + RFValue(28)}px;
  padding: 0 24px;
`;
