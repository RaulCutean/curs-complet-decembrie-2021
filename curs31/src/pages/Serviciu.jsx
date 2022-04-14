import React from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";

export const ServiciuPage = () => {
  const { name } = useParams();

  return (
    <Layout>
      <h1>Oferim servicii {name}</h1>
    </Layout>
  );
};
