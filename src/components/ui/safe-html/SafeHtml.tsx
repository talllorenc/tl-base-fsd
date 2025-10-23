"use client";

import DOMPurify from "dompurify";
import { cn } from "@/utils/cn";

interface ISafeHtmlProps extends React.HTMLAttributes<HTMLDivElement> {
  html: string;
}

const SafeHtml = ({ html, ...props }: ISafeHtmlProps) => {
  return (
    <div
      className={cn(props.className)}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  );
};

export default SafeHtml;