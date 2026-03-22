import React, { useState, useEffect, useContext } from 'react';
const Login = ({ handleLogin }) => {


  const [Email, setEmail] = useState('')
  const [Password, setPassword] = useState('')
  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(Email, Password)
    setEmail('')
    setPassword('')

    // console.log("Email is : ", Email);
    // console.log("Password is : ", Password);


  }
  return (

    <div className="w-screen h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      {/* Glass morphism container */}
      <div className="relative backdrop-blur-xl bg-white/5 border border-white/10 p-12 rounded-3xl w-[440px] shadow-2xl shadow-emerald-500/10">
        {/* Gradient border effect */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-emerald-400/20 -z-10"></div>

        {/* Top accent line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full"></div>

        <form
          onSubmit={(e) => { submitHandler(e) }}
          className="flex flex-col gap-6 items-center justify-center">

          {/* Header */}
          <div className="mb-4 text-center">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-white via-emerald-100 to-white bg-clip-text text-transparent mb-2">Welcome Back</h2>
            <p className="text-slate-400 text-sm">Enter your credentials to continue</p>
          </div>

          {/* Email Input */}
          <div className="relative w-full group">
            <input
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="email"
              placeholder="Email"
              className="w-full text-white outline-none bg-white/5 border border-white/10 text-base py-4 px-6 rounded-2xl placeholder:text-slate-500 focus:border-emerald-500/50 focus:bg-white/10 transition-all duration-300 hover:bg-white/[0.07] focus:ring-2 focus:ring-emerald-500/20" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Password Input */}
          <div className="relative w-full group">
            <input
              required
              value={Password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Password"
              className="w-full text-white outline-none bg-white/5 border border-white/10 text-base py-4 px-6 rounded-2xl placeholder:text-slate-500 focus:border-emerald-500/50 focus:bg-white/10 transition-all duration-300 hover:bg-white/[0.07] focus:ring-2 focus:ring-emerald-500/20" />
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 w-full relative text-white font-semibold rounded-2xl text-base py-4 px-8 focus:outline-none transition-all duration-300 overflow-hidden group">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-600 transition-all duration-300 group-hover:scale-105"></div>
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl shadow-lg shadow-emerald-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            <span className="relative z-10">Login</span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login