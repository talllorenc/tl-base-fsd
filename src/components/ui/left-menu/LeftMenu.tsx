import LeftMenuNavigation from "./LeftMenuNavigation";

export const LeftMenu = () => {
  return (
    <aside className="hidden lg:block sticky top-[92px] h-[calc(100vh-120px)] overflow-y-auto max-w-[300px] w-full">
      <div className="">
        <LeftMenuNavigation />
      </div>
    </aside>
  );
};