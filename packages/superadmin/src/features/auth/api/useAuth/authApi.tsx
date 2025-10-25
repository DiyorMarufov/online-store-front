import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "..";
import type { IAuthUser } from "../../../../shared/lib/types";

export const login = "login";

export const useAuth = () => {
  const signInUser = useMutation({
    mutationFn: (data: IAuthUser) =>
      api.post("users/signin", data).then((res) => res.data),
  });

  const getUser = () =>
    useQuery({
      queryKey: [login],
      queryFn: () => api.get("users/profile").then((res) => res.data),
      refetchOnWindowFocus: false,
      staleTime: 1000 * 60 * 5,
      gcTime: 1000 * 60 * 10,
    });

  return { signInUser, getUser };
};
