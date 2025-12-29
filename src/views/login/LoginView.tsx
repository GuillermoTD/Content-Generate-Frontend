import * as React from "react";
import { useState, useEffect } from "react";
import { EyeIcon, EyeOffIcon } from "lucide-react";

export default function LoginView() {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRightDiv, setShowRightDiv] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login:", { username, password });
  };

  // useEffect para manejar scroll
  useEffect(() => {
  const handleChange = () => {
    console.log("Scroll Y:", window.scrollY, "Altura:", window.innerHeight);

    // Lógica de ocultar div
    if (window.scrollY > 300) {
      setShowRightDiv(false);
    } else {
      setShowRightDiv(true);
    }
  };

  window.addEventListener("scroll", handleChange);
  window.addEventListener("resize", handleChange); // <-- escucha resize también

  return () => {
    window.removeEventListener("scroll", handleChange);
    window.removeEventListener("resize", handleChange);
  };
});


  return (
    <div className="flex min-h-screen">
      <div className="flex flex-1 items-center justify-center p-8 bg-white">
        <div className="w-full max-w-[420px]">
          <h1 className="text-4xl font-bold mb-3 text-black leading-tight">
            Welcome back!
          </h1>
          <p className="text-[0.95rem] text-[#666666] mb-8 leading-relaxed">
            Simplify your workflow and boost your productivity with Tuga's App.
            Get started for free.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-5 py-4 border-2 border-[#e5e5e5] rounded-full text-[0.95rem] outline-none transition-colors focus:border-black bg-white placeholder:text-[#999999]"
                required
              />
            </div>

            <div className="relative">
              <div className="relative flex items-center">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-5 py-4 border-2 border-[#e5e5e5] rounded-full text-[0.95rem] outline-none transition-colors focus:border-black bg-white placeholder:text-[#999999]"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-5 bg-transparent border-none cursor-pointer p-0 flex items-center text-[#666666] hover:text-black transition-colors"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? (
                    <EyeOffIcon size={20} />
                  ) : (
                    <EyeIcon size={20} />
                  )}
                </button>
              </div>
            </div>

            <a
              href="#"
              className="text-right text-[0.85rem] text-black no-underline -mt-2 mb-2 hover:underline"
            >
              Forgot Password?
            </a>

            <button
              type="submit"
              className="px-6 py-4 border-none rounded-full text-base font-semibold cursor-pointer transition-all bg-black text-white mt-2 hover:bg-[#333333] hover:-translate-y-[1px]"
            >
              Login
            </button>
          </form>

          <div className="flex items-center text-center my-7 text-[#999999] text-[0.9rem] before:content-[''] before:flex-1 before:border-b before:border-[#e5e5e5] after:content-[''] after:flex-1 after:border-b after:border-[#e5e5e5]">
            <span className="px-4">or continue with</span>
          </div>

          <div className="flex gap-4 justify-center">
            <button
              className="w-[60px] h-[60px] rounded-full bg-black text-white border-none flex items-center justify-center cursor-pointer transition-all hover:bg-[#333333] hover:-translate-y-[2px]"
              aria-label="Login with Google"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            </button>

            <button
              className="w-[60px] h-[60px] rounded-full bg-black text-white border-none flex items-center justify-center cursor-pointer transition-all hover:bg-[#333333] hover:-translate-y-[2px]"
              aria-label="Login with Apple"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"
                />
              </svg>
            </button>

            <button
              className="w-[60px] h-[60px] rounded-full bg-black text-white border-none flex items-center justify-center cursor-pointer transition-all hover:bg-[#333333] hover:-translate-y-[2px]"
              aria-label="Login with Facebook"
            >
              <svg viewBox="0 0 24 24" width="20" height="20">
                <path
                  fill="currentColor"
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                />
              </svg>
            </button>
          </div>

          <p className="text-center mt-6 text-[0.9rem] text-[#666666]">
            Not a member?{" "}
            <a
              href="#signup"
              className="text-black no-underline font-semibold hover:underline"
            >
              Register now
            </a>
          </p>
        </div>
      </div>

      {/* {showRightDiv && (
        <div className="flex-1 bg-gradient-to-br from-[#f5f7fa] to-[#e8f5e9] flex items-center justify-center p-12 relative overflow-hidden">
          <div className="text-center relative z-10">
            <div className="mb-8 animate-[float_6s_ease-in-out_infinite]">
              <svg
                viewBox="0 0 400 400"
                className="max-w-[400px] w-full h-auto drop-shadow-[0_10px_30px_rgba(0,0,0,0.1)]"
              >
                <circle cx="100" cy="80" r="30" fill="#E8F5E9" />
                <circle cx="105" cy="75" r="25" fill="#A5D6A7" />

                <circle cx="80" cy="200" r="25" fill="#FFF9C4" />
                <circle cx="85" cy="195" r="20" fill="#FFF59D" />

                <circle cx="320" cy="180" r="30" fill="#FFE0B2" />
                <circle cx="325" cy="175" r="25" fill="#FFCC80" />

                <path
                  d="M 130 80 Q 200 50 290 150"
                  stroke="#81C784"
                  strokeWidth="3"
                  fill="none"
                  strokeDasharray="5,5"
                />

                <ellipse cx="200" cy="280" rx="80" ry="60" fill="#E8F5E9" />

                <circle cx="200" cy="160" r="35" fill="#FFE0B2" />
                <path
                  d="M 185 155 Q 185 160 190 160"
                  stroke="#333"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 210 155 Q 210 160 215 160"
                  stroke="#333"
                  strokeWidth="2"
                  fill="none"
                />
                <path
                  d="M 195 175 Q 200 178 205 175"
                  stroke="#333"
                  strokeWidth="2"
                  fill="none"
                />

                <rect
                  x="165"
                  y="195"
                  width="70"
                  height="90"
                  rx="35"
                  fill="#81C784"
                />
                <circle cx="200" cy="230" r="20" fill="white" />
                <path
                  d="M 190 230 Q 200 240 210 230"
                  stroke="#81C784"
                  strokeWidth="3"
                  fill="none"
                />

                <ellipse
                  cx="140"
                  cy="260"
                  rx="15"
                  ry="40"
                  fill="#81C784"
                  transform="rotate(-30 140 260)"
                />
                <ellipse
                  cx="260"
                  cy="260"
                  rx="15"
                  ry="40"
                  fill="#81C784"
                  transform="rotate(30 260 260)"
                />

                <ellipse
                  cx="170"
                  cy="330"
                  rx="12"
                  ry="35"
                  fill="#81C784"
                  transform="rotate(-45 170 330)"
                />
                <ellipse
                  cx="230"
                  cy="330"
                  rx="12"
                  ry="35"
                  fill="#81C784"
                  transform="rotate(45 230 330)"
                />
              </svg>
            </div>

            <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.08)] mb-8 text-[0.9rem]">
              <span className="font-semibold text-black">Canva Design</span>
              <span className="text-[#666666] text-[0.85rem]">10 Task</span>
              <span className="bg-[#81c784] text-white px-3 py-1 rounded-[20px] font-semibold text-[0.8rem]">
                84%
              </span>
              <button className="bg-[#f5f5f5] border border-[#e5e5e5] px-4 py-[0.4rem] rounded-[20px] text-[0.85rem] cursor-pointer transition-all hover:bg-[#e5e5e5]">
                Design
              </button>
            </div>

            <h2 className="text-2xl text-[#333333] leading-relaxed max-w-[500px] mx-auto">
              Make your work easier and organized with{" "}
              <strong className="text-black font-bold">Tuga's App</strong>
            </h2>
          </div>

          <style>{`
          @keyframes float {
            0%,
            100% {
              transform: translateY(0px);
            }
            50% {
              transform: translateY(-20px);
            }
          }
        `}</style>
        </div>
      )} */}
    </div>
  );
}
