import { ReactNode } from "react";
import { Header } from "@/components/ui/header";
import { LeftMenu } from "@/components/ui/left-menu";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { RightMenu } from "@/components/ui/right-menu";

export const MainLayout = ({ children }: { children: ReactNode }) => {
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
};
