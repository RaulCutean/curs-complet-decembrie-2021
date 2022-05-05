import React from "react";
import { Container, Name, Count, Remove } from "./UserCard.style";

interface Props {
  user: {
    name: string;
    id: number;
    count: number;
  };
  onClick: (id: number) => void;
  onRemove: (id: number) => void;
}

export function UserCard({ user, onClick, onRemove }: Props) {
  return (
    <Container>
      <Name onClick={() => onClick(user.id)}>{user.name}</Name>
      {user.count > 0 && <Count>{user.count}</Count>}
      <Remove onClick={() => onRemove(user.id)}>x</Remove>
    </Container>
  );
}
