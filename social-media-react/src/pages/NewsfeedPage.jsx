import React, { useEffect, useState } from "react";
import { apiFactory } from "../api";
import {
  ProtectedLayout,
  PageWrapper,
  Sidebar,
  PostsWrapper,
  Post,
} from "../components";

export function NewsfeedPage() {
  const [searchValue, setSearchValue] = useState("");
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  function handleSearch(searchTerm) {
    setSearchValue(searchTerm);
    console.log(searchTerm);
  }

  async function getAllPosts() {
    const { data, status } = await apiFactory().posts().getAll();

    if (status === 200) {
      setPosts(data);
    }

    setLoading(false);
  }

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <ProtectedLayout>
      <PageWrapper searchValue={searchValue} handleSearch={handleSearch}>
        <Sidebar>sidebar left</Sidebar>
        <PostsWrapper>
          {loading && <div>Loading...</div>}
          {!loading &&
            posts.length > 0 &&
            posts.map((p) => <Post data={p} key={p.id} />)}
        </PostsWrapper>
      </PageWrapper>
    </ProtectedLayout>
  );
}
