import { Breadcrumb, Header, LeftMenu, RightMenu } from "@/components/ui";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col min-h-screen">
      <Header />
      <main className="flex flex-1 flex-col">
        <div className="flex flex-1 flex-col px-4">
          <div className="flex flex-1 justify-between gap-12">
            <LeftMenu />
            <div className="flex flex-1 flex-col container">
              <Breadcrumb />
              {children}
            </div>
            <RightMenu />
          </div>
        </div>
      </main>
    </div>
  );
}
