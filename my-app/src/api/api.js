import { QueryClient, QueryClientProvider, useQuery } from "@tanstack/react-query";
import axios from "axios";

export const fetchUsers = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};

export const useUsers = () => {
    return useQuery({
      queryKey: ["users"],
      queryFn: fetchUsers
    });
  };
