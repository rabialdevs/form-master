

import Logo from "./assets/logo.svg";
import CustomInput from "./input";

function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-7 p-7 shadow-lg rounded-md">
        <img src={Logo} className="animate-bounce" />

        <p className="text-lg font-semibold">Sign in</p>

        <div className="flex flex-col gap-3">
          <CustomInput type="email" placeholder="Email address" />
          <CustomInput type="password" placeholder="Password" />
        </div>

        <div className="flex flex-col gap-4">
          <button className="w-[260px] py-[10px] bg-[#ff5e5e] shadow-md shadow-red-200 text-white text-[14px] font-semibold rounded-md">
            Sign in
          </button>
          <a
            className="text-center text-sm text-[#b3b5b9] font-medium"
            href="#"
          >
            Forgot your password?
          </a>
        </div>

        <div className="flex flex-col gap-4">
          <p className="text-[14px] text-[#656976] text-center font-medium">
            Don't have a Column account?
          </p>
          <button className="w-[260px] py-[9px] bg-white shadow-md text-[#656976] text-[14px] font-semibold border-[1px] rounded-md">
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
