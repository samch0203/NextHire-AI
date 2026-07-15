import { LucideIcon } from "lucide-react";

export interface SidebarItem {
  id: string;
  label: string;
  icon: LucideIcon;
  active?: boolean;
}

export interface ScoreCard {
  title: string;
  value: string;
  subtitle: string;
  color: "blue" | "green" | "orange" | "purple";
}

export interface ResumeProgress {
  title: string;
  percentage: number;
}

export interface AISuggestion {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

export interface ActivityItem {
  id: number;
  title: string;
  time: string;
}