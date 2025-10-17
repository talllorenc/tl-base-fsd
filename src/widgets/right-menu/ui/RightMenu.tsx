"use client";

import { useRightMenuVisibility } from "@/shared/lib/utils/useRightMenuVisibility";

const RightMenu = () => {
  const { isVisible } = useRightMenuVisibility();
  if (!isVisible) return null;
  
  return (
    <div className="hidden xl:block sticky top-[92px] h-[calc(100vh-120px)] overflow-y-auto max-w-[300px] w-full">
      right menu
    </div>
  );
};

export default RightMenu;
