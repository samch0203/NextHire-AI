import {
  FileText,
  BarChart3,
  Target,
  FileSignature,
  Sparkles,
  Download,
} from "lucide-react";

const features = [
  {
    title: "AI Resume Builder",
    description: "Create professional resumes with AI assistance in minutes.",
    icon: FileText,
  },
  {
    title: "ATS Score Checker",
    description: "Analyze your resume for Applicant Tracking Systems.",
    icon: BarChart3,
  },
  {
    title: "Job Match Analyzer",
    description: "Compare your resume against job descriptions.",
    icon: Target,
  },
  {
    title: "Cover Letter Generator",
    description: "Generate personalized cover letters instantly.",
    icon: FileSignature,
  },
  {
    title: "AI Suggestions",
    description: "Receive intelligent recommendations to improve your resume.",
    icon: Sparkles,
  },
  {
    title: "PDF Export",
    description: "Download your resume as a beautifully formatted PDF.",
    icon: Download,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold">
          Everything You Need to Get Hired
        </h2>

        <p className="mt-4 text-gray-600">
          Powerful AI tools designed to help you build better resumes and
          land more interviews.
        </p>
      </div>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="rounded-2xl border p-8 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              <Icon className="mb-5 h-10 w-10 text-blue-600" />

              <h3 className="text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-3 text-gray-600">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}