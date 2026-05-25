import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPost } from "../../services/api";

const Signup = () => {
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    role: "user",
  });

  const updateField = (field, value) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await apiPost("/auth/signup", formData);
      sessionStorage.setItem("vyora_otp_mobile", formData.mobile);
      sessionStorage.setItem("vyora_otp_purpose", "signup");
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
            Create Account
          </span>

          <h1 className="mt-6 text-3xl font-bold md:text-4xl">
            Join and connect with trusted businesses
          </h1>

          <p className="mt-4 text-gray-300">
            Create your account as a user or vendor and start using the platform.
          </p>

          <div className="mt-10 grid gap-4">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">For Users</h3>
              <p className="mt-1 text-sm text-gray-300">
                Post requirements, get quotes, and save businesses.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <h3 className="font-semibold text-white">For Vendors</h3>
              <p className="mt-1 text-sm text-gray-300">
                Register your business and receive leads from customers.
              </p>
            </div>
          </div>
        </div>

        <div className="p-8 md:p-10">
          <h2 className="text-2xl font-bold text-[#1F2937]">Signup</h2>
          <p className="mt-2 text-sm text-[#6B7280]">
            Fill your details to create an account.
          </p>

          <form onSubmit={handleSignup} className="mt-8 space-y-5">
            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1F2937]">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter full name"
                value={formData.name}
                onChange={(e) => updateField("name", e.target.value)}
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1F2937]">
                Mobile Number
              </label>
              <input
                type="tel"
                placeholder="Enter mobile number"
                value={formData.mobile}
                onChange={(e) => updateField("mobile", e.target.value)}
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1F2937]">
                Email
              </label>
              <input
                type="email"
                placeholder="Enter email address"
                value={formData.email}
                onChange={(e) => updateField("email", e.target.value)}
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder:text-[#6B7280] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-[#1F2937]">
                Role
              </label>
              <select
                value={formData.role}
                onChange={(e) => updateField("role", e.target.value)}
                className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
              >
                <option value="user">User</option>
                <option value="vendor">Vendor</option>
              </select>
            </div>

            {message && <p className="text-sm font-semibold text-red-600">{message}</p>}

            <button
              type="submit"
              className="w-full rounded-lg bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white hover:bg-green-600"
            >
              Create Account
            </button>

            <p className="text-center text-sm text-[#6B7280]">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-semibold text-[#22C55E] hover:underline"
              >
                Login
              </Link>
            </p>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Signup;
