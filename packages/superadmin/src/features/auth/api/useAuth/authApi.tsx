import { useMutation } from "@tanstack/react-query";
import { api } from "..";
import type { IAuthUser } from "../../../../shared/lib/types";

export const login = "login";

export const useAuth = () => {
  const signInUser = useMutation({
    mutationFn: (data: IAuthUser) =>
      api.post("users/signin", data).then((res) => res.data),
  });

  return { signInUser };
};
