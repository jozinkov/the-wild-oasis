import { useMutation, useQueryClient } from "@tanstack/react-query";

import { updateUser as updateUserApi } from "../../services/apiAuth";
import toast from "react-hot-toast";

export function useUpdateUser() {
  const queryClient = useQueryClient();

  const { isLoading: isUpdating, mutate: updateUser } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data.user);
      // queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Account information was updated");
    },
    onError: (err) => toast.error(err.message),
  });

  return { isUpdating, updateUser };
}
