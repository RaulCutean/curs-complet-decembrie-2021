import React, { useEffect, useState } from "react";
import { Container } from "./PostsListPage.style";
import { useGetPosts } from "hooks/posts/useGetPosts";
import { Posts } from "store/posts";

export const PostsPage = () => {
  const [{ loading, error, data: posts }, setGetPosts] = useGetPosts();
  const [postData, setPostData] = useState<Posts[]>();

  useEffect(() => {
    setGetPosts();
  }, []);

  useEffect(() => {
    !loading && !error && setPostData(posts);
  }, [loading]);

  return (
    <Container>
      <h1>Posts list</h1>
      {loading ? (
        <div>fetching posts</div>
      ) : (
        !error && postData && <div>{postData.length}</div>
      )}
    </Container>
  );
};
