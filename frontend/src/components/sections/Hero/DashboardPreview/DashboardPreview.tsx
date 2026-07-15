import Sidebar from "./Sidebar";
import Header from "./Header";
import ScoreCards from "./ScoreCards";
import ATSCard from "./ATSCard";
import AISuggestions from "./AISuggestions";
import RecentActivity from "./RecentActivity";

export default function DashboardPreview() {
  return (
    <section className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
      <div className="flex min-h-[760px]">
        {/* Sidebar */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="flex flex-1 flex-col bg-slate-50">
          <Header />

          <main className="flex-1 space-y-6 p-6">
            {/* Score Cards */}
            <ScoreCards />

            {/* Middle Section */}
            <div className="grid gap-6 xl:grid-cols-2">
              <ATSCard />
              <AISuggestions />
            </div>

            {/* Bottom Section */}
            <RecentActivity />
          </main>
        </div>
      </div>
    </section>
  );
}