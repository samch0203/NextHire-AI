import { DashboardPreview } from "./DashboardPreview";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20">
      {/* Hero Content */}
      <div className="flex flex-col items-center text-center">
        <span className="rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-700">
          AI-Powered Resume Builder
        </span>

        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight md:text-7xl">
          Build an
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            {" "}
            ATS-Friendly Resume{" "}
          </span>
          in Minutes
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-gray-600">
          Create professional resumes, improve them with AI, analyze job
          descriptions, and land more interviews with NextHire AI.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700">
            Get Started Free
          </button>

          <button className="rounded-xl border border-slate-300 px-6 py-3 font-semibold transition hover:bg-gray-100">
            View Demo
          </button>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="mt-20">
        <DashboardPreview />
      </div>
    </section>
  );
}