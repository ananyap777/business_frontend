import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPost } from "../../services/api";

const Login = () => {
  const navigate = useNavigate();
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSendOtp = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await apiPost("/auth/request-otp", {
        mobile,
        purpose: "login",
      });
      sessionStorage.setItem("vyora_otp_mobile", mobile);
      sessionStorage.setItem("vyora_otp_purpose", "login");
      if (response.data.devOtp) {
        sessionStorage.setItem("vyora_dev_otp", response.data.devOtp);
      }
      navigate("/verify-otp");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto grid max-w-6xl overflow-hidden rounded-3xl border border-[#E5E7EB] bg-white shadow-sm lg:grid-cols-2">
        <div className="bg-[#111827] p-10 text-white">
          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-[#22C55E]">
            Welcome Back
          </span>

          <h1 className="mt-6 text-3xl font-bold md:text-4xl">
            Login to discover trusted businesses
          </h1>

          <p className="mt-4 text-gray-300">
            Search services, compare vendors, and connect with businesses faster.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">Fast access</h3>
              <p className="mt-1 text-sm text-gray-300">
                Login using OTP and continue your search quickly.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">Save businesses</h3>
              <p className="mt-1 text-sm text-gray-300">
                Save vendors and track your requirements from your dashboard.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold text-[#1F2937]">Login</h2>
          <p className="mt-2 text-sm text-[#6B7280]">
            Enter your mobile number to receive OTP.
          </p>

          <form onSubmit={handleSendOtp} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1F2937]">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
              />
            </div>

            {message && <p className="text-sm font-semibold text-red-600">{message}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white hover:bg-green-600"
            >
              Send OTP
            </button>

            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-[#E5E7EB]" />
              <span className="text-sm text-[#6B7280]">or</span>
              <div className="h-px flex-1 bg-[#E5E7EB]" />
            </div>

            <button
              type="button"
              className="w-full rounded-lg border border-[#E5E7EB] bg-white px-4 py-3 text-sm font-semibold text-[#1F2937] hover:bg-[#F9FAFB]"
            >
              Continue with Google
            </button>

            <p className="text-center text-sm text-[#6B7280]">
              Don&apos;t have an account?{" "}
              <Link
                to="/signup"
                className="font-semibold text-[#22C55E] hover:underline"
              >
                Signup
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login;
