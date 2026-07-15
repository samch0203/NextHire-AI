import { Bell, Sparkles, CalendarDays } from "lucide-react";

export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });

  return (
    <header className="flex flex-col gap-5 border-b border-slate-200 bg-white p-6 md:flex-row md:items-center md:justify-between">
      {/* Left */}
      <div>
        <h1 className="text-3xl font-bold text-slate-900">
          Welcome back, Samiksha 👋
        </h1>

        <p className="mt-2 text-slate-500">
          Let's improve your resume and land your next opportunity.
        </p>

        <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
          <CalendarDays className="h-4 w-4" />
          <span>{today}</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-medium text-emerald-700">
          <Sparkles className="h-4 w-4" />
          AI Ready
        </div>

        <button
          className="rounded-full border border-slate-200 p-3 transition hover:bg-slate-100"
          aria-label="Notifications"
        >
          <Bell className="h-5 w-5 text-slate-700" />
        </button>

        <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-white px-3 py-2 shadow-sm">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            S
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-semibold text-slate-900">
              Samiksha
            </p>

            <p className="text-xs text-slate-500">
              AI & DS Student
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}