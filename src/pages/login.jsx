// import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const loginSchema = z.object({
  username: z
    .string()
    .min(1, "Username is required")
    // Use .superRefine() to create a custom validation logic
    .superRefine((val, ctx) => {
      // Check if the value is a valid email format
      const isEmail = z.string().email().safeParse(val).success;
      // Check if the value is a valid username (at least 5 characters)
      const isUsername = val.length >= 5;

      // If it's neither, add a custom Zod error
      if (!isEmail && !isUsername) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Input a valid email or a username with at least 5 characters.",
        });
      }
    }),
  password: z
    .string()
    .min(1, "Password is required")
    .min(6, "Password must be at least 6 characters"),
});

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    // Handle form submission logic here
    console.log(data);
  };

  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-linear-to-r from-cyan-500 to-blue-500">
        <div className="bg-white flex flex-col justify-center items-center px-6 py-7 rounded-xl gap-4 max-w-[340px] w-full">
          <div className="flex flex-col gap-4 justify-center items-center w-full">
            <img src="/key.svg" alt="key image" className="w-16" />
            <h1 className="font-medium text-2xl px-2">Login ke Akun Anda</h1>
          </div>
          <form
            onSubmit={handleSubmit(onSubmit)} // Pass onSubmit function here
            className="flex flex-col gap-3 justify-center items-center w-full"
          >
            <div className="w-full">
              <input
                type="text"
                placeholder="Email/Username"
                {...register("username")}
                className={`text-base w-full py-2 px-3 rounded-lg border ${
                  errors.username ? "border-red-500" : "border-[#D3D4D5]"
                }`}
              />
              {errors.username && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <img src="/warning.svg" alt="error" className="w-4 h-4" />
                  <p>{errors.username.message}</p>
                </div>
              )}
            </div>
            <div className="w-full">
              <input
                type="password"
                placeholder="Password"
                {...register("password")}
                className={`text-base w-full py-2 px-3 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-[#D3D4D5]"
                }`}
              />
              {errors.password && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <img src="/warning.svg" alt="error" className="w-4 h-4" />
                  <p>{errors.password.message}</p>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#3C63DF] hover:bg-[#2e5ae9] transition-colors hover:cursor-pointer text-white w-full py-2.5 px-2 rounded-xl text-[17px]"
            >
              Login
            </button>
          </form>
          <div className="flex flex-col gap-3 justify-center items-center w-full">
            <p className="text-[#585960]">Lupa Password?</p>
            <Link to="/register" className="w-full">
              <button className="border font-medium w-full py-3 hover:bg-blue-500 hover:text-white hover:cursor-pointer transition-colors rounded-xl">
                Daftar Sekarang
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Login;