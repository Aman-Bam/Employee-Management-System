import React, { useState } from "react"
import { LogOut, Bell, Zap } from "lucide-react"

const Header = ({ data, changeUser }) => {
  const [notif, setNotif] = useState(3)

  const logOutUser = () => {
    localStorage.removeItem("loggedInUser")
    if (changeUser) changeUser(null)
    else window.location.reload()
  }

  const initials = (data?.name || "AD")
    .split(" ").map(n => n[0]).join("").slice(0, 2).toUpperCase()

  const hour = new Date().getHours()
  const greeting = hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening"

  return (
    <header className="flex items-center justify-between px-8 h-[72px] bg-slate-950/75 backdrop-blur-xl border-b border-white/5 sticky top-0 z-40 font-sans">
      
      {/* Subtle top shimmer line */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-emerald-400/40 to-blue-400/30" />

      {/* ── Left: Logo + greeting ── */}
      <div className="flex items-center gap-5">
        
        {/* Logo mark */}
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 border border-emerald-400/30 flex items-center justify-center shadow-[0_0_16px_rgba(52,211,153,0.1)] text-emerald-400">
          <Zap size={20} fill="currentColor" />
        </div>

        {/* Divider */}
        <div className="w-[1px] h-8 bg-white/10" />

        {/* Greeting */}
        <div>
          <p className="text-[11px] text-slate-400 font-semibold tracking-wider uppercase mb-0.5">
            {greeting}
          </p>
          <h1 className="text-lg font-extrabold tracking-tight leading-none bg-gradient-to-r from-emerald-400 via-emerald-300 to-emerald-400 bg-clip-text text-transparent">
            {data?.name || "Admin"}
          </h1>
        </div>
      </div>

      {/* ── Right: actions ── */}
      <div className="flex items-center gap-3">
        
        {/* Notification bell */}
        <button
          onClick={() => setNotif(0)}
          className="relative w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 cursor-pointer transition-all duration-200 hover:bg-white/10 hover:text-slate-300"
        >
          <Bell size={18} />
          {notif > 0 && (
            <span className="absolute top-1 right-1 w-4 h-4 rounded-full bg-red-500 border-2 border-slate-950 text-[9px] font-extrabold text-white flex items-center justify-center">
              {notif}
            </span>
          )}
        </button>

        {/* Avatar chip */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl p-1 pr-3">
          {/* Avatar circle */}
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-emerald-400/20 to-emerald-400/5 border border-emerald-400/30 flex items-center justify-center text-[11px] font-extrabold text-emerald-400">
            {initials}
          </div>
          <div>
            <div className="text-xs font-bold text-slate-200 leading-tight">
              {(data?.name || "Admin").split(" ")[0]}
            </div>
            <div className="text-[10px] text-slate-400 leading-none capitalize">
              {data?.role || "Administrator"}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-[1px] h-7 bg-white/10" />

        {/* Logout button */}
        <button
          onClick={logOutUser}
          className="group flex items-center gap-1.5 px-4 py-2 rounded-xl border border-red-400/20 bg-red-400/5 text-red-500 text-[13px] font-bold cursor-pointer transition-all duration-200 hover:border-red-400/40 hover:bg-red-400/10 hover:text-red-300 hover:scale-105 hover:shadow-[0_0_16px_rgba(248,113,113,0.15)]"
        >
          <LogOut size={16} className="transition-transform group-hover:-translate-x-0.5" />
          <span>Logout</span>
        </button>
      </div>
    </header>
  )
}

export default Header