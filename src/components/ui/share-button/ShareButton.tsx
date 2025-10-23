"use client";

import { Button } from "../button/Button";
import { Share } from "lucide-react";
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

interface IShareButtonProps {
  url: string;
}

const ShareButton = ({ url }: IShareButtonProps) => {
  const handleShare = async () => {
    copy(url);
    toast.success("Copied to clipboard!");
  };

  return (
    <Button
      className="bg-cherry text-white border-cherry hover:bg-cherry/80"
      onClick={handleShare}
    >
      <Share size={16}/>
      Share
    </Button>
  );
};

export default ShareButton;
