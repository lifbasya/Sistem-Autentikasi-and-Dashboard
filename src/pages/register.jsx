import Navbar from "../components/navbar";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { refine, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const registerSchema = z.object({
  name: z
    .string()
    .min(1, "name is required")
    .min(3, "min 3 characters")
    .max(50, "max 50 characters"),
  email: z.email().min(1, "email is required"),
  username: z.string().min(1, "required").min(5, "need 5 characters"),
  age: z.coerce
    .number({
      required_error: "Wajib diisi.",
      invalid_type_error: "Hanya angka.",
    })
    .min(18, { message: "Minimal 18 tahun." })
    .max(60, { message: "Maksimal 60 tahun." }),
  password: z
    .string()
    .min(1, "Wajib diisi.")
    .min(8, "Minimal 8 karakter.")
    .regex(/[A-Z]/, "Harus mengandung huruf besar.")
    .regex(/[0-9]/, "Harus mengandung angka."),
});

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(registerSchema),
  });

  return (
    <>
      <main className="flex justify-center items-center min-h-screen bg-linear-to-r from-cyan-500 to-blue-500">
        <div className="bg-white flex flex-col justify-center items-center px-6 py-7 rounded-xl gap-4 max-w-[340px] w-full">
          <div className="flex flex-col gap-4 justify-center items-center w-full">
            <img src="/registericon.svg" alt="key image" className="w-16" />
            <h1 className="font-medium text-2xl px-2">Daftar Akun Baru</h1>
          </div>
          <form
            onSubmit={handleSubmit()}
            className="flex flex-col gap-3 justify-center items-center w-full"
          >
            <div className="w-full">
              <input
                type="text"
                placeholder="Name"
                {...register("name")}
                className={`text-base w-full py-2 px-3 rounded-lg border ${
                  errors.name ? "border-red-500" : "border-[#D3D4D5]"
                }`}
              />
              {errors.name && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <img src="/warning.svg" alt="error" className="w-4 h-4" />
                  <p>{errors.name.message}</p>
                </div>
              )}
            </div>
            <div className="w-full">
              <input
                type="email"
                placeholder="Email"
                {...register("email")}
                className={`text-base w-full py-2 px-3 rounded-lg border ${
                  errors.email ? "border-red-500" : "border-[#D3D4D5]"
                }`}
              />
              {errors.email && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <img src="/warning.svg" alt="error" className="w-4 h-4" />
                  <p>{errors.email.message}</p>
                </div>
              )}
            </div>
            <div className="flex justify-center items-center gap-2">
              <div className="">
                <input
                  type="text"
                  placeholder="Username"
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
              <div className="">
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
            </div>
            <div className="w-full">
              <input
                type="number"
                placeholder="age"
                {...register("age")}
                className={`text-base w-full py-2 px-3 rounded-lg border ${
                  errors.age ? "border-red-500" : "border-[#D3D4D5]"
                }`}
              />
              {errors.age && (
                <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                  <img src="/warning.svg" alt="error" className="w-4 h-4" />
                  <p>{errors.age.message}</p>
                </div>
              )}
            </div>
            <button
              type="submit"
              className="bg-[#3C63DF] hover:bg-[#2e5ae9] transition-colors hover:cursor-pointer text-white w-full py-2.5 px-2 rounded-xl text-[17px]"
            >
              Daftar
            </button>
          </form>
          <p className="text-black">
            Sudah punya akun?{" "}
            <Link to="/" className="text-[#3C63DF]">
              Masuk
            </Link>
          </p>
        </div>
      </main>
    </>
  );
}

export default Register;
