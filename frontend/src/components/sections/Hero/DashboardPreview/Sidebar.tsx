import { sidebarItems } from "./data";

export default function Sidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r border-slate-200 bg-white">
      {/* Logo */}
      <div className="border-b border-slate-200 p-6">
        <h2 className="text-xl font-bold text-slate-900">
          NextHire <span className="text-blue-600">AI</span>
        </h2>

        <p className="mt-1 text-sm text-slate-500">
          AI Career Operating System
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-5">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.id}>
                <button
                  className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-sm font-medium transition-all duration-200
                  ${
                    item.active
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  <Icon size={18} />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-4">
        <div className="rounded-xl bg-slate-50 p-4">
          <p className="text-xs text-slate-500">Current Plan</p>

          <h3 className="mt-1 font-semibold text-slate-900">
            Premium
          </h3>

          <p className="mt-2 text-xs text-slate-500">
            Unlimited AI Resume Reviews
          </p>
        </div>
      </div>
    </aside>
  );
}