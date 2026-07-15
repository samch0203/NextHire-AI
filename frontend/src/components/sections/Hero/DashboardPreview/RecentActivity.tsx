import { recentActivities } from "./data";
import { Clock3, ArrowUpRight } from "lucide-react";

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-semibold text-slate-900">
            Recent Activity
          </h2>

          <p className="mt-1 text-sm text-slate-500">
            Your latest AI resume updates.
          </p>
        </div>

        <Clock3 className="h-6 w-6 text-slate-500" />
      </div>

      <div className="mt-6 space-y-4">
        {recentActivities.map((activity) => (
          <div
            key={activity.id}
            className="flex items-center justify-between rounded-xl border border-slate-100 p-4 transition hover:bg-slate-50"
          >
            <div>
              <h3 className="font-medium text-slate-900">
                {activity.title}
              </h3>

              <p className="mt-1 text-sm text-slate-500">
                {activity.time}
              </p>
            </div>

            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
              <ArrowUpRight className="h-5 w-5 text-blue-600" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}