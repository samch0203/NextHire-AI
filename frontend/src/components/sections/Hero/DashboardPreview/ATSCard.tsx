import { resumeProgress } from "./data";
import { Target, CheckCircle2 } from "lucide-react";

export default function ATSCard() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            ATS Optimization
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your resume is highly compatible with Applicant Tracking Systems.
          </p>
        </div>

        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
          <Target className="h-7 w-7 text-blue-600" />
        </div>
      </div>

      <div className="mt-8 space-y-6">
        {resumeProgress.map((item) => (
          <div key={item.title}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-sm font-medium text-slate-700">
                {item.title}
              </span>

              <span className="text-sm font-semibold text-slate-900">
                {item.percentage}%
              </span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-slate-100">
              <div
                className="h-full rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 transition-all duration-700"
                style={{ width: `${item.percentage}%` }}
              />
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl bg-emerald-50 p-4">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="mt-0.5 h-5 w-5 text-emerald-600" />

          <div>
            <h3 className="font-medium text-emerald-800">
              AI Recommendation
            </h3>

            <p className="mt-1 text-sm text-emerald-700">
              Your resume has an excellent ATS score. Add more measurable
              achievements to improve it beyond 95%.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}