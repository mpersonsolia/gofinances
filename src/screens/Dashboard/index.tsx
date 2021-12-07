import React from "react";
import { HighlightCard } from "../../components/HighlightCard";

import {
  Container,
  Header,
  HighlightCards,
  Icon,
  Photo,
  User,
  UserGreeting,
  UserInfo,
  UserName,
  UserWrapper,
} from "./styles";

export function Dashboard() {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/79114619?v=4",
              }}
            />

            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Maria Paula</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 1.000,00"
          lastTransaction="Última entrada"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.000,00"
          lastTransaction="Última entrada"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 1.000,00"
          lastTransaction="Última entrada"
        />
      </HighlightCards>
    </Container>
  );
}
