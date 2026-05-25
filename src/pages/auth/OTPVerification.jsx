import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPost, saveAuth } from "../../services/api";

const OTPVerification = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState(sessionStorage.getItem("vyora_dev_otp") || "");
  const [message, setMessage] = useState("");

  const handleVerifyOtp = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const response = await apiPost("/auth/verify-otp", {
        mobile: sessionStorage.getItem("vyora_otp_mobile"),
        purpose: sessionStorage.getItem("vyora_otp_purpose") || "login",
        otp,
      });
      saveAuth(response.data);
      sessionStorage.removeItem("vyora_dev_otp");
      navigate("/search");
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <main className="min-h-screen bg-[#F9FAFB] px-6 py-10">
      <section className="mx-auto max-w-xl rounded-3xl border border-[#E5E7EB] bg-white p-8 shadow-sm md:p-10">
        <div className="text-center">
          <span className="rounded-full bg-green-50 px-4 py-2 text-sm font-semibold text-[#22C55E]">
            OTP Verification
          </span>

          <h1 className="mt-6 text-3xl font-bold text-[#1F2937]">
            Verify your number
          </h1>

          <p className="mt-3 text-sm text-[#6B7280]">
            Enter the OTP sent to your mobile number.
          </p>
        </div>

        <form onSubmit={handleVerifyOtp} className="mt-8 space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-[#1F2937]">
              OTP Code
            </label>

            <input
              type="text"
              maxLength="6"
              placeholder="Enter 6 digit OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="w-full rounded-lg border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-center text-lg font-semibold tracking-[0.4em] text-[#1F2937] placeholder:text-sm placeholder:font-normal placeholder:tracking-normal placeholder:text-[#6B7280] outline-none focus:border-[#22C55E] focus:ring-2 focus:ring-green-100"
            />
          </div>

          {message && <p className="text-sm font-semibold text-red-600">{message}</p>}

          <button
            type="submit"
            className="w-full rounded-lg bg-[#22C55E] px-4 py-3 text-sm font-semibold text-white hover:bg-green-600"
          >
            Verify OTP
          </button>

          <div className="flex items-center justify-between text-sm">
            <button
              type="button"
              className="font-semibold text-[#22C55E] hover:underline"
            >
              Resend OTP
            </button>

            <Link to="/login" className="text-[#6B7280] hover:text-[#22C55E]">
              Change Number
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
};

export default OTPVerification;
