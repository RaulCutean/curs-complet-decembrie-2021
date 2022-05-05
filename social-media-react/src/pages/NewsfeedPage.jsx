import React from "react";
import {
  ProtectedLayout,
  PageWrapper,
  Sidebar,
  PostsWrapper,
} from "../components";

export function NewsfeedPage() {
  return (
    <ProtectedLayout>
      <PageWrapper>
        <Sidebar>sidebar left</Sidebar>
        <PostsWrapper>posts list</PostsWrapper>
      </PageWrapper>
    </ProtectedLayout>
  );
}
