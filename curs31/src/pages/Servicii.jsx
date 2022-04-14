import React from "react";
import { Layout, Hero, Users } from "../components";
import { useGetAllUsers } from "../hooks";

export const ServiciiPage = () => {
  const { fetching, users, error } = useGetAllUsers();

  return (
    <Layout>
      <Hero />
      <Users fetching={fetching} users={users} error={error} />
    </Layout>
  );
};
