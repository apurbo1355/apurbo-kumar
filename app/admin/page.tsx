"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("admin@example.com");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("admin_session_demo");
    if (session === "active") {
      router.replace("/admin/dashboard");
      return;
    }
    setChecking(false);
  }, [router]);

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError("Email and password are required.");
      return;
    }

    // Demo-only authenticated flow for local development.
    localStorage.setItem("admin_session_demo", "active");
    router.replace("/admin/dashboard");
  };

  if (checking) {
    return <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-200">Checking access...</main>;
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-950 p-6 text-slate-100">
      <div className="w-full max-w-md rounded-[2rem] border border-slate-800 bg-slate-900/80 p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <p className="text-xs uppercase tracking-[0.26em] text-sky-400">Private access</p>
          <h1 className="mt-3 text-3xl font-bold">Admin login</h1>
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Email</span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-sky-500"
              type="email"
              required
            />
          </label>
          <label className="block">
            <span className="mb-2 block text-sm text-slate-300">Password</span>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3 text-slate-100 outline-none focus:border-sky-500"
              type="password"
              required
            />
          </label>

          {error ? <div className="rounded-xl border border-red-500/50 bg-red-500/10 px-3 py-2 text-sm text-red-200">{error}</div> : null}

          <button type="submit" className="w-full rounded-full bg-sky-500 px-5 py-3 font-semibold text-slate-950 transition hover:bg-sky-400">
            Sign in
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-slate-400">Only authenticated administrators can access this dashboard.</p>
      </div>
    </main>
  );
}
