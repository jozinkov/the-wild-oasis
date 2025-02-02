import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

import { signup as signupApi } from "../../services/apiAuth";

export function useSignup() {
  const { isLoading, mutate: signup } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created");
    },
    onError: (err) => {
      console.log(err);
      toast.error(err.message);
    },
  });

  return { isLoading, signup };
}
