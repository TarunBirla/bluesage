import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginModal = ({ close }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">

      <div className="w-[420px] bg-[#0c0c0c] border border-gray-700 rounded-3xl p-8 relative">

        {/* CLOSE */}
        <button
          onClick={close}
          className="absolute right-5 top-4 text-gray-400 text-xl"
        >
          ×
        </button>

        {/* TITLE */}
        <h2 className="text-white text-2xl font-semibold text-center mb-6">
          log in
        </h2>

        {/* GOOGLE + OTP */}
        <div className="flex gap-4 mb-6">

          <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg">
            Google
          </button>

          <button className="flex-1 bg-gray-800 text-white py-3 rounded-lg">
            log in with OTP
          </button>

        </div>

        <p className="text-center text-gray-400 mb-6">Or</p>

        {/* EMAIL */}
        <div className="mb-4">
          <label className="text-gray-400 text-[18px]">Email</label>
          <input
            type="email"
            placeholder="www.@gmail.com"
            className="w-full mt-2 bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white outline-none"
          />
        </div>

        {/* PASSWORD */}
        <div className="mb-4 relative">

          <div className="flex justify-between text-[18px] text-gray-400">
            <label>Password</label>
            <span className="cursor-pointer">Forgot ?</span>
          </div>

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            className="w-full mt-2 bg-transparent border border-gray-600 rounded-lg px-4 py-3 text-white outline-none"
          />

          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-11 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>

        </div>

        {/* LOGIN BUTTON */}
        <button className="w-full bg-gray-400 text-black py-3 rounded-lg font-semibold mt-3">
          log in
        </button>

        {/* FOOTER */}
        <p className="text-center text-gray-400 text-[18px] mt-6">
          Already Have An Account ?{" "}
          <span className="text-white cursor-pointer">Log In</span>
        </p>

      </div>

    </div>
  );
};

export default LoginModal;