import {
  ShieldCheck,
  User,
  FlaskConical,
  LucideIcon,
  CheckCircle,
  XCircle,
} from "lucide-react";

export const statusConfig: Record<
  string,
  { label: string; color: string; icon: LucideIcon }
> = {
  VERIFIED: {
    label: "Active",
    color: "bg-green-100 text-green-800 border border-green-800",
    icon: CheckCircle,
  },
  UNVERIFIED: {
    label: "Inactive",
    color: "bg-red-100 text-red-800 border border-red-800",
    icon: XCircle,
  },
} as const;

export const roleConfig: Record<
  string,
  { label: string; icon: LucideIcon; color: string }
> = {
  ADMIN: {
    label: "Admin",
    icon: ShieldCheck,
    color: "bg-purple-100 text-purple-800 border border-purple-800",
  },
  USER: {
    label: "User",
    icon: User,
    color: "bg-gray-100 text-gray-800 border border-gray-800",
  },
  TESTER: {
    label: "Tester",
    icon: FlaskConical,
    color: "bg-yellow-100 text-yellow-800 border border-yellow-800",
  },
} as const;
