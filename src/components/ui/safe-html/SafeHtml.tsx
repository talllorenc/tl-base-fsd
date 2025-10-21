"use client";

import DOMPurify from "dompurify";
import { cn } from "@/utils";

interface ISafeHtmlProps extends React.HTMLAttributes<HTMLDivElement> {
  html: string;
}

export const SafeHtml = ({ html, ...props }: ISafeHtmlProps) => {
  return (
    <div
      className={cn(props.className)}
      dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(html) }}
    />
  );
};