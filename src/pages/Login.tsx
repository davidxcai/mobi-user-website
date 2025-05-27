import { useForm, isEmail, isNotEmpty } from "@mantine/form";
import { useLogin } from "../hooks/useAuth";

export function Login() {
  const {
    mutate: login,
    isPending: loginPending,
    isError: loginError,
    error,
    isSuccess: loginSuccess,
  } = useLogin();

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Invalid email"),
      password: isNotEmpty("Password is required"),
    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-full">
      <h1 className="text-3xl font-bold underline">Login</h1>
      {loginError && (
        <p className="text-rose-500">Error logging in: {error.message}</p>
      )}
      {loginSuccess && (
        <p className="text-emerald-500">Login Successful! Redirecting...</p>
      )}
      <form
        onSubmit={form.onSubmit((credentials) => {
          login(credentials);
        })}
      >
        <fieldset className="flex flex-col gap-4 m-4" disabled={loginPending}>
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
          <button
            type="submit"
            className="bg-sky-500 p-2 rounded-md cursor-pointer hover:bg-sky-600"
          >
            {loginPending ? "Logging in..." : "Login"}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
