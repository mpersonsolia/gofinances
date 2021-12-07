import styled from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";

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

export const Photo = styled.Image`
  height: ${RFValue(48)}px;
  width: ${RFValue(48)}px;

  border-radius: 10px;
`;

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
