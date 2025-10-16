import { Header } from "@/widgets/header";
import { LeftMenu } from "@/widgets/left-menu";
import { RightMenu } from "@/widgets/right-menu";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-1 flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col px-4">
          <div className="flex flex-1 justify-between gap-12">
            <LeftMenu />
            <div className="h-full container">{children}</div>
            <RightMenu />
          </div>
        </div>
      </main>
    </div>
  );
}
