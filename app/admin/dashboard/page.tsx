"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboardPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem("admin_session_demo");
    if (session !== "active") {
      router.replace("/admin");
      return;
    }
    setReady(true);
  }, [router]);

  const signOut = () => {
    localStorage.removeItem("admin_session_demo");
    router.replace("/admin");
  };

  if (!ready) {
    return <main className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-200">Checking permissions...</main>;
  }

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <header className="mb-10 flex items-center justify-between rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.22em] text-sky-400">Dashboard</p>
            <h1 className="mt-3 text-3xl font-bold">Portfolio control panel</h1>
          </div>
          <button onClick={signOut} className="rounded-full border border-slate-700 px-4 py-2 text-sm font-medium text-slate-200 transition hover:border-sky-500 hover:text-sky-300">Sign out</button>
        </header>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["Public profile", "1"],
            ["Research items", "4"],
            ["Media assets", "2"],
            ["International activities", "12"],
          ].map(([label, value]) => (
            <div key={label} className="rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-slate-400">{label}</div>
              <div className="mt-5 text-4xl font-bold text-white">{value}</div>
            </div>
          ))}
        </div>

        <section className="mt-10 rounded-[2rem] border border-slate-800 bg-slate-900/80 p-6">
          <h2 className="text-2xl font-semibold">Content management</h2>
          <p className="mt-3 max-w-2xl text-slate-300">This admin area is ready for Supabase-backed content management, profile editing, publication updates, and media uploads in a production deployment.</p>
        </section>
      </div>
    </main>
  );
}
