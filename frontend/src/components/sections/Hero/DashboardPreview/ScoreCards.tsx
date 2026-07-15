import { scoreCards } from "./data";
import {
  FileText,
  Target,
  Briefcase,
  Mic,
} from "lucide-react";

const icons = {
  blue: FileText,
  green: Target,
  orange: Mic,
  purple: Briefcase,
};

const colors = {
  blue: "bg-blue-100 text-blue-600",
  green: "bg-emerald-100 text-emerald-600",
  orange: "bg-orange-100 text-orange-600",
  purple: "bg-violet-100 text-violet-600",
};

export default function ScoreCards() {
  return (
    <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
      {scoreCards.map((card) => {
        const Icon = icons[card.color];

        return (
          <div
            key={card.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-center justify-between">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-xl ${colors[card.color]}`}
              >
                <Icon className="h-6 w-6" />
              </div>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-700">
                Good
              </span>
            </div>

            <h3 className="mt-6 text-sm font-medium text-slate-500">
              {card.title}
            </h3>

            <p className="mt-2 text-3xl font-bold text-slate-900">
              {card.value}
            </p>

            <p className="mt-2 text-sm text-slate-500">
              {card.subtitle}
            </p>
          </div>
        );
      })}
    </div>
  );
}