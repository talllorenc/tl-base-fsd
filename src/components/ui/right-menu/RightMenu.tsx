"use client";

import { useRightMenuVisibility } from "./model/useRightMenuVisibility";

const RightMenu = () => {
  const { isVisible } = useRightMenuVisibility();
  if (!isVisible) return null;
  
  return (
    <aside className="hidden xl:block sticky top-[92px] h-[calc(100vh-120px)] overflow-y-auto max-w-[300px] w-full">
      right menu
    </aside>
  );
};

export default RightMenu;