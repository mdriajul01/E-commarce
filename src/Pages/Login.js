import React from "react";
import login from "../assest/signin.gif";

const Login = () => {
  return (
    <section
      id="login"
      className="h-screen flex items-center justify-center -mt-44"
    >
      <div className="bg-slate-100 p-8 w-full max-w-md mx-auto rounded-2xl border">
        <div className="my-10 text-center">
          <div className="w-20 h-20 mx-auto mb-4">
            <img
              src={login}
              alt="Login"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="font-bold text-4xl text-[#352d2d]">Login</h1>
        </div>
        <form action="" method="">
          <div className="space-y-6">
            <div>
              <label htmlFor="Email" className="block mb-2">
                Email:
              </label>
              <input
                type="text"
                id="Email"
                name="Email"
                placeholder="Type Email"
                className="w-full border border-slate-300 rounded-lg py-3 px-5 outline-none bg-transparent"
              />
            </div>
            <div>
              <label htmlFor="Password" className="block mb-2">
                Password:
              </label>
              <input
                type="password"
                id="Password"
                name="Password"
                placeholder="Type Password"
                className="w-full border border-slate-300 rounded-lg py-3 px-5 outline-none bg-transparent"
              />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Login;
