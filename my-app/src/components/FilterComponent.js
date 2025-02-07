import { useState } from "react";
import { useUsers } from "../api/api";

const FilterComponent = () => 
{const { data: users, isLoading } = useUsers();

  const [search, setSearch] = useState("");

  if (isLoading) return <p>Loading...</p>;

  const filteredUsers = users?.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <input
        type="text"
        placeholder="Search user"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default FilterComponent;
