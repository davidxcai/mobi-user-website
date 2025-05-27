import { useEffect } from "react";
import { useForm, isEmail, isInRange, matchesField } from "@mantine/form";
import { useRegister } from "../hooks/useAuth";

export function Register() {
  const {
    mutate: register,
    isPending,
    isError,
    error,
    isSuccess,
  } = useRegister();
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: isInRange(
        { min: 8, max: 20 },
        "Password must be 8-20 characters long"
      ),
      confirmPassword: matchesField("password", "Passwords do not match"),
    },
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const { email, password } = form.getValues();
    register({ email, password });
  };

  useEffect(() => {
    if (isSuccess) {
      form.reset();
    }
  }, [isSuccess]);

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl font-bold underline">Register</h1>
      {isError && (
        <p className="text-rose-500">Error registering: {error.message}</p>
      )}
      {isSuccess && (
        <p className="text-emerald-500">
          Registration successful! Verify your email to login.
        </p>
      )}
      <form onSubmit={handleSubmit}>
        <fieldset className="flex flex-col gap-4 m-4" disabled={isPending}>
          <input
            className="border-b border-white"
            type="text"
            placeholder="Email"
            key={form.key("email")}
            {...form.getInputProps("email")}
          />
          <input
            className="border-b border-white"
            type="password"
            placeholder="Password"
            key={form.key("password")}
            {...form.getInputProps("password")}
          />
          <input
            className="border-b border-white"
            type="password"
            placeholder="Confirm Password"
            key={form.key("confirmPassword")}
            {...form.getInputProps("confirmPassword")}
          />
          <button
            type="submit"
            className="bg-sky-500 p-2 rounded-md cursor-pointer hover:bg-sky-600"
          >
            {isPending ? "Registering..." : "Register"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
