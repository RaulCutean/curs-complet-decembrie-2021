import React from "react";
import { useParams } from "react-router-dom";

export const AddEditPostPage = () => {
  const property = useParams();

  return (
    <div>
      <h1>{JSON.stringify(property)}</h1>
    </div>
  );
};
