import { Header } from "@/widgets/header";
import { LeftMenu } from "@/widgets/left-menu";

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
          <div className="flex flex-1 justify-between py-12">
            <LeftMenu />
            <div className="h-full w-full">{children}</div>
          </div>
        </div>
      </main>
    </div>
  );
}
