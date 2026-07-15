import { aiSuggestions } from "./data";
import { CheckCircle2, Circle, Sparkles } from "lucide-react";

export default function AISuggestions() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            AI Suggestions
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Personalized recommendations to improve your resume.
          </p>
        </div>

        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-100">
          <Sparkles className="h-6 w-6 text-violet-600" />
        </div>
      </div>

      <div className="mt-6 space-y-4">
        {aiSuggestions.map((suggestion) => (
          <div
            key={suggestion.id}
            className="flex items-start gap-4 rounded-xl border border-slate-100 p-4 transition-all duration-200 hover:bg-slate-50"
          >
            {suggestion.completed ? (
              <CheckCircle2 className="mt-1 h-5 w-5 text-emerald-500" />
            ) : (
              <Circle className="mt-1 h-5 w-5 text-slate-300" />
            )}

            <div className="flex-1">
              <h3 className="font-medium text-slate-900">
                {suggestion.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {suggestion.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}