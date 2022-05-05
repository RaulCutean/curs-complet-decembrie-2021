import React, { useState } from "react";
import {
  Container,
  Sidebar,
  Users,
  Input,
} from "./components/components.style";
import { generateUsers } from "./helpers/getUsers";
import { UserCard } from "./components/UserCard";

function App() {
  const users = generateUsers();
  const [userList, setUserList] = useState(users);
  const [initialUserList, setInitialUserList] = useState(users);
  const [searchValue, setSearchValue] = useState("");

  function handleClickUser(id: number) {
    const newList = userList.map((user) => {
      if (user.id !== id) {
        return { ...user, count: user.count + 1 };
      } else {
        return user;
      }
    });
    const newInitialList = userList.map((user) => {
      if (user.id !== id) {
        return { ...user, count: user.count + 1 };
      } else {
        return user;
      }
    });
    setUserList(newList);
    setInitialUserList(newInitialList);
  }

  function handleRemoveUser(id: number) {
    const newList = userList.filter((user) => user.id !== id);
    const newInitalList = initialUserList.filter((user) => user.id !== id);
    setUserList(newList);
    setInitialUserList(newInitalList);
  }

  function handleSearchUsers(searchTerm: string) {
    clearTimeout();
    setSearchValue(searchTerm);
    const filteredUsers = initialUserList.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTimeout(() => {
      if (searchTerm !== "") {
        setUserList(filteredUsers);
      } else {
        setUserList(initialUserList);
      }
    }, 300);
  }

  return (
    <Container>
      <Sidebar>
        <Input
          placeholder="Search users"
          value={searchValue}
          onChange={(e) => handleSearchUsers(e.target.value)}
        />
      </Sidebar>
      <Users>
        {userList.map((u) => (
          <UserCard
            user={u}
            onClick={handleClickUser}
            onRemove={handleRemoveUser}
            key={u.id}
          />
        ))}
      </Users>
    </Container>
  );
}

export default App;
