import React from "react";
import { ProtectedLayout, Hero, Users } from "../components";
import { useGetAllUsers } from "../hooks";

export const ServiciiPage = () => {
  const { fetching, users, error } = useGetAllUsers();

  return (
    <ProtectedLayout>
      <Hero />
      <Users fetching={fetching} users={users} error={error} />
    </ProtectedLayout>
  );
};
