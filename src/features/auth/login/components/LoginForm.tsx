"use client";

import { useForm, SubmitHandler, FieldValues } from "react-hook-form";
import { toast } from "react-toastify";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, Input, Spinner } from "@/components/ui";
import { useState } from "react";
import { Eye, EyeOff, User, Lock } from "lucide-react";
import { useLoginCreateQO } from "../hooks/useLoginCreateQO";
import { AxiosError } from "axios";

type Inputs = {
  email: string;
  password: string;
};

const schema = yup.object().shape({
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email"),
  password: yup.string().required("Password is required"),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm<Inputs>({
    shouldFocusError: false,
    resolver: yupResolver(schema),
  });

  const { mutate, isPending } = useLoginCreateQO({
    onSuccess: (data) => {
      toast.success(data.message);
      window.location.href = "/";
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data.message);
      }
      reset();
    },
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    mutate(data);
  };

  const onInvalid = (data: FieldValues) => {
    Object.values(data).forEach((field) => {
      toast.error(field.message);
    });
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onInvalid)}
      className="flex flex-col gap-4 w-full"
    >
      <Input
        id="email"
        type="email"
        placeholder="Email"
        icon={User}
        register={register("email")}
        error={errors.email?.message}
        disabled={isPending}
      />
      <div className="relative">
        <Input
          id="password"
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          icon={Lock}
          register={register("password")}
          error={errors.password?.message}
          disabled={isPending}
        />

        <button
          type="button"
          onClick={handleShowPassword}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-foregroundSecondary hover:text-foregroundSecondary/80"
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="bg-cherry hover:bg-cherry/80 w-full text-white"
      >
        {isPending ? <Spinner color="white" /> : "Login"}
      </Button>
    </form>
  );
};

export default LoginForm;
