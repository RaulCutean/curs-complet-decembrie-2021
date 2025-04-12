import React from "react";
import {
  Background,
  Container,
  Title,
  UsersWrapper,
  Loader,
  Error,
  UserCard,
  Avatar,
  Name,
  Email,
} from "./Users.style";

export const Users = ({ fetching, users, error }) => {
  return (
    <Background>
      <Container>
        <Title>Top 0 users</Title>
        <UsersWrapper>
          {fetching && <Loader>Fetching users...</Loader>}
          {error && <Error>{error}</Error>}
          {!fetching &&
            !error &&
            users.length > 0 &&
            users.map((user) => (
              <UserCard to={`/servicii/${user.id}`} key={user.id}>
                <Avatar src={user.avatar} />
                <Name>
                  {user.first_name} {user.last_name}
                </Name>
                <Email>{user.email}</Email>
              </UserCard>
            ))}
        </UsersWrapper>
      </Container>
    </Background>
  );
};
