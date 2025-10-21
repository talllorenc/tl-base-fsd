import { MainLayout } from "@/components/layouts/main-layout";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}
