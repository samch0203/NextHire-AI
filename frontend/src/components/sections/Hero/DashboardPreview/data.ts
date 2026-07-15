import {
  LayoutDashboard,
  FileText,
  Target,
  Brain,
  Briefcase,
  Mail,
  Settings,
} from "lucide-react";

import {
  SidebarItem,
  ScoreCard,
  ResumeProgress,
  AISuggestion,
  ActivityItem,
} from "./types";

export const sidebarItems: SidebarItem[] = [
  {
    id: "dashboard",
    label: "Dashboard",
    icon: LayoutDashboard,
    active: true,
  },
  {
    id: "resume",
    label: "My Resume",
    icon: FileText,
  },
  {
    id: "ats",
    label: "ATS Score",
    icon: Target,
  },
  {
    id: "review",
    label: "AI Review",
    icon: Brain,
  },
  {
    id: "jobs",
    label: "Job Match",
    icon: Briefcase,
  },
  {
    id: "cover",
    label: "Cover Letter",
    icon: Mail,
  },
  {
    id: "settings",
    label: "Settings",
    icon: Settings,
  },
];

export const scoreCards: ScoreCard[] = [
  {
    title: "Resume Score",
    value: "96/100",
    subtitle: "Excellent",
    color: "blue",
  },
  {
    title: "ATS Compatibility",
    value: "91%",
    subtitle: "Very High",
    color: "green",
  },
  {
    title: "Interview Readiness",
    value: "88%",
    subtitle: "Almost Ready",
    color: "orange",
  },
  {
    title: "Applications",
    value: "24",
    subtitle: "This Month",
    color: "purple",
  },
];

export const resumeProgress: ResumeProgress[] = [
  {
    title: "Resume Completed",
    percentage: 96,
  },
  {
    title: "ATS Optimized",
    percentage: 91,
  },
  {
    title: "Interview Ready",
    percentage: 88,
  },
];

export const aiSuggestions: AISuggestion[] = [
  {
    id: 1,
    title: "Add measurable achievements",
    description: "Include numbers to highlight your impact.",
    completed: false,
  },
  {
    id: 2,
    title: "Improve professional summary",
    description: "Make your summary more recruiter-focused.",
    completed: false,
  },
  {
    id: 3,
    title: "Add Python, SQL & AI keywords",
    description: "Improve ATS matching with relevant skills.",
    completed: true,
  },
];

export const recentActivities: ActivityItem[] = [
  {
    id: 1,
    title: "Resume analyzed successfully",
    time: "2 min ago",
  },
  {
    id: 2,
    title: "ATS score improved to 91%",
    time: "15 min ago",
  },
  {
    id: 3,
    title: "AI generated new suggestions",
    time: "1 hour ago",
  },
];