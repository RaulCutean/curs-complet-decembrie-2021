import React from "react";
import { Layout } from "../components";
import { useParams } from "react-router-dom";

export const ServiciuPage = () => {
  const { id } = useParams();

  return (
    <Layout>
      <h1>Oferim servicii {id}</h1>
    </Layout>
  );
};
