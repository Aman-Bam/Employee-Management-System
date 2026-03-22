import React, { useState, useContext } from 'react'
import { AuthContext } from '../context/AuthProvider'
import { Plus, Check, Zap } from 'lucide-react'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'

const CATEGORIES = [
    { label: "Design", icon: "🎨", color: "text-purple-400", border: "border-purple-400", bg: "bg-purple-400/10", shadow: "shadow-purple-400/20" },
    { label: "Development", icon: "💻", color: "text-emerald-400", border: "border-emerald-400", bg: "bg-emerald-400/10", shadow: "shadow-emerald-400/20" },
    { label: "Backend", icon: "⚙️", color: "text-blue-400", border: "border-blue-400", bg: "bg-blue-400/10", shadow: "shadow-blue-400/20" },
    { label: "Frontend", icon: "🖥️", color: "text-pink-400", border: "border-pink-400", bg: "bg-pink-400/10", shadow: "shadow-pink-400/20" },
    { label: "DevOps", icon: "🚀", color: "text-orange-400", border: "border-orange-400", bg: "bg-orange-400/10", shadow: "shadow-orange-400/20" },
    { label: "Testing", icon: "🧪", color: "text-yellow-400", border: "border-yellow-400", bg: "bg-yellow-400/10", shadow: "shadow-yellow-400/20" },
    { label: "Database", icon: "🗄️", color: "text-teal-400", border: "border-teal-400", bg: "bg-teal-400/10", shadow: "shadow-teal-400/20" },
    { label: "Documentation", icon: "📄", color: "text-slate-400", border: "border-slate-400", bg: "bg-slate-400/10", shadow: "shadow-slate-400/20" },
    { label: "Management", icon: "📋", color: "text-red-400", border: "border-red-400", bg: "bg-red-400/10", shadow: "shadow-red-400/20" },
]

const CreateTaskAdmin = ({ data }) => {
    const { userData, setUserData } = useContext(AuthContext) || { userData: null, setUserData: () => { } };

    const [form, setForm] = useState({
        title: "", description: "", dueDate: "", assignedTo: "", category: "",
    })

    const EMPLOYEES = userData && userData.employees ? userData.employees.map(emp => emp.name) : [
        "Aman Kumar", "Priya Sharma", "Rahul Verma",
        "Sneha Patel", "Anjali Singh", "Divya Nair",
        "Arjun Kapoor", "Karan Mehta",
    ]

    const [submitted, setSubmitted] = useState(false)
    const [empDropdown, setEmpDropdown] = useState(false)

    const selectedCat = CATEGORIES.find(c => c.label === form.category)

    const handleSubmit = (e) => {
        e.preventDefault()
        if (!form.title || !form.category || !form.assignedTo) return

        const newTask = {
            active: false,
            newTask: true,
            completed: false,
            failed: false,
            taskTitle: form.title,
            taskDescription: form.description,
            taskDate: form.dueDate,
            category: form.category
        }

        if (userData && userData.employees) {
            const employees = userData.employees;
            const updatedEmployees = employees.map(emp => {
                if (emp.name === form.assignedTo) {
                    return { ...emp, tasks: [...emp.tasks, newTask] };
                }
                return emp;
            });

            setUserData({ ...userData, employees: updatedEmployees });
            localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        }

        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setForm({ title: "", description: "", dueDate: "", assignedTo: "", category: "" })
        }, 2200)
    }

    const field = (key) => ({
        value: form[key],
        onChange: e => setForm(f => ({ ...f, [key]: e.target.value })),
    })

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-teal-950 font-sans py-10 px-6 relative overflow-x-hidden">

            {/* Ambient blobs */}
            <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute top-[10%] left-[5%] w-[500px] h-[500px] bg-emerald-400/5 rounded-full blur-[90px]" />
                <div className="absolute bottom-[15%] right-[8%] w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[90px]" />
                <div className="absolute top-[55%] left-[45%] w-[300px] h-[300px] bg-purple-400/5 rounded-full blur-[80px]" />
            </div>

            {/* Subtle grid lines */}
            <div className="fixed inset-0 pointer-events-none z-0 opacity-[0.018]" style={{
                backgroundImage: "linear-gradient(rgba(255,255,255,1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,1) 1px,transparent 1px)",
                backgroundSize: "60px 60px",
            }} />

            <div className="relative z-10 max-w-3xl mx-auto">

                {/* ── Page header ── */}
                <div className="flex items-start justify-between mb-10 flex-wrap gap-4">
                    <div>
                        <div className="flex items-center gap-2.5 mb-1.5">
                            <div className="w-9 h-9 rounded-lg bg-emerald-400/15 border border-emerald-400/25 flex items-center justify-center text-emerald-400">
                                <Zap size={18} fill="currentColor" />
                            </div>
                            <span className="text-[11px] font-bold tracking-widest text-emerald-400 uppercase">Admin Dashboard</span>
                        </div>
                        <h1 className="text-3xl font-extrabold text-slate-100 tracking-tight leading-tight m-0">
                            Create New Task
                        </h1>
                        <p className="text-slate-400 text-[13.5px] mt-1.5 mb-0">
                            Welcome back, <span className="text-slate-300 font-semibold">{data?.name || "Admin"}</span>
                        </p>
                    </div>

                    {/* Quick stats pill */}
                    <div className="flex gap-2">
                        {[{ v: "20", l: "Tasks", c: "text-emerald-400" }, { v: "6", l: "Active", c: "text-blue-400" }, { v: "8", l: "Pending", c: "text-yellow-400" }].map(s => (
                            <div key={s.l} className="bg-white/5 border border-white/10 rounded-xl py-2.5 px-4 text-center min-w-[64px]">
                                <div className={`text-lg font-extrabold leading-none ${s.c}`}>{s.v}</div>
                                <div className="text-[10px] text-slate-400 mt-1 font-semibold uppercase tracking-wider">{s.l}</div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Main form card ── */}
                <div className="bg-slate-900/65 border border-white/10 rounded-3xl py-9 px-10 backdrop-blur-xl shadow-[0_32px_80px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)] relative overflow-hidden">

                    {/* Top accent line */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-0.5 bg-gradient-to-r from-transparent via-emerald-400 to-transparent rounded-full" />

                    <form onSubmit={handleSubmit}>

                        {/* Title */}
                        <div className="mb-6">
                            <Input
                                label="Task Title"
                                placeholder="e.g. Redesign onboarding flow"
                                {...field("title")}
                            />
                        </div>

                        {/* Description */}
                        <div className="mb-6">
                            <label className="block text-slate-400 text-[10.5px] font-bold tracking-widest uppercase mb-1.5">Description</label>
                            <textarea
                                placeholder="Describe what needs to be done, acceptance criteria, and any context…"
                                rows={4}
                                className="w-full bg-slate-800/30 border-2 border-slate-700/50 rounded-xl px-4 py-3.5 text-slate-200 text-sm outline-none transition-all duration-200 focus:bg-emerald-500/5 focus:border-emerald-500/40 resize-none leading-relaxed"
                                {...field("description")}
                            />
                        </div>

                        {/* Due Date + Assign To */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <div>
                                <Input
                                    label="Due Date"
                                    type="date"
                                    className="[color-scheme:dark]"
                                    {...field("dueDate")}
                                />
                            </div>

                            {/* Assign To — dropdown */}
                            <div className="relative">
                                <Input
                                    label="Assign To"
                                    placeholder="Search employee…"
                                    value={form.assignedTo}
                                    onChange={e => { setForm(f => ({ ...f, assignedTo: e.target.value })); setEmpDropdown(true) }}
                                    onFocus={() => { setEmpDropdown(true) }}
                                    onBlur={() => { setTimeout(() => setEmpDropdown(false), 150) }}
                                />
                                {empDropdown && (
                                    <div className="absolute top-[calc(100%+6px)] left-0 right-0 z-10 bg-slate-900 border border-white/10 rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.6)] overflow-hidden">
                                        {EMPLOYEES.filter(e => e.toLowerCase().includes(form.assignedTo.toLowerCase())).map(emp => (
                                            <div
                                                key={emp}
                                                onMouseDown={() => { setForm(f => ({ ...f, assignedTo: emp })); setEmpDropdown(false) }}
                                                className="px-3.5 py-2.5 text-[13px] text-slate-300 cursor-pointer flex items-center gap-2.5 transition-colors hover:bg-emerald-400/10"
                                            >
                                                <div className="w-7 h-7 rounded-full bg-emerald-400/10 border border-emerald-400/20 flex items-center justify-center text-[11px] font-bold text-emerald-400">
                                                    {emp.split(" ").map(n => n.charAt(0)).join("")}
                                                </div>
                                                {emp}
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Category — visual pill picker */}
                        <div className="mb-8">
                            <label className="block text-slate-400 text-[10.5px] font-bold tracking-widest uppercase mb-1.5">Category</label>
                            <div className="flex flex-wrap gap-2">
                                {CATEGORIES.map(cat => {
                                    const active = form.category === cat.label
                                    return (
                                        <button
                                            key={cat.label}
                                            type="button"
                                            onClick={() => setForm(f => ({ ...f, category: active ? "" : cat.label }))}
                                            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border-[1.5px] text-[12.5px] cursor-pointer transition-all duration-150 ${
                                                active 
                                                    ? `${cat.border}/70 ${cat.bg} ${cat.color} font-bold scale-105 shadow-[0_0_12px] ${cat.shadow}` 
                                                    : "border-white/10 bg-white/5 text-slate-400 font-medium hover:border-white/20"
                                            }`}
                                        >
                                            <span className="text-sm">{cat.icon}</span>
                                            {cat.label}
                                            {active && (
                                                <span className={`w-3.5 h-3.5 rounded-full flex items-center justify-center ml-0.5 ${cat.bg} border ${cat.border}/40`}>
                                                    <Check size={10} className="text-current" />
                                                </span>
                                            )}
                                        </button>
                                    )
                                })}
                            </div>
                            {selectedCat && (
                                <div className={`mt-2.5 flex items-center gap-1.5 text-xs ${selectedCat.color} opacity-80`}>
                                    <div className={`w-1.5 h-1.5 rounded-full bg-current`} />
                                    Category set to <strong>{selectedCat.label}</strong>
                                </div>
                            )}
                        </div>

                        {/* Divider */}
                        <div className="h-[1px] bg-white/5 mb-7" />

                        {/* Submit */}
                        <Button
                            type="submit"
                            disabled={submitted}
                            size="lg"
                            className={submitted 
                                ? "bg-gradient-to-br from-emerald-600 to-emerald-400 text-white cursor-default shadow-[0_0_32px_rgba(52,211,153,0.35)]" 
                                : ""}
                        >
                            {submitted ? (
                                <>
                                    <Check size={18} className="mr-2" />
                                    Task Created Successfully!
                                </>
                            ) : (
                                <>
                                    <Plus size={18} className="mr-2" />
                                    Create Task
                                </>
                            )}
                        </Button>

                    </form>
                </div>

                {/* ── Bottom hint ── */}
                <p className="text-center text-slate-500 text-xs mt-5">
                    Fields marked with a category are required to submit
                </p>
            </div>
        </div>
    )
}

export default CreateTaskAdmin