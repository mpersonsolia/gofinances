import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";

interface IconProps {
  type: "up" | "down";
}

interface ContainerProps {
  isActive: boolean;
  type: "up" | "down";
}

export const Container = styled.View<ContainerProps>`
  width: 48%;

  border-width: ${({ isActive }) => (isActive ? 0 : 1.5)}px;
  border-style: solid;
  border-color: ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  ${({ isActive, type }) =>
    isActive &&
    type === "up" &&
    css`
      background-color: ${({ theme }) => theme.colors.success_light};
    `}

  ${({ isActive, type }) =>
    isActive &&
    type === "down" &&
    css`
      background-color: ${({ theme }) => theme.colors.attention_light};
    `}
`;

export const Button = styled(RectButton)`
  align-items: center;
  flex-direction: row;
  justify-content: center;

  padding: 16px;
`;

export const Icon = styled(Feather)<IconProps>`
  margin-right: 12px;

  font-size: ${RFValue(24)}px;

  color: ${({ theme, type }) =>
    type === "up" ? theme.colors.success : theme.colors.attention};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const TransactionsTypes = styled.View`
  margin-top: 8px;

  flex-direction: row;
  justify-content: space-between;
`;
