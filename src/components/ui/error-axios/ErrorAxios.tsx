import { TriangleAlert } from "lucide-react";

const ErrorAxios = () => {
  return (
    <div className="w-full bg-errorBackground border border-errorOutline p-4 rounded-xl">
      <div className="flex items-start gap-2">
        <TriangleAlert className="text-errorForeground shrink-0" />
        <div className="flex flex-col">
          <p className="font-medium text-errorForeground">Server Error</p>
          <p className="text-errorForeground  text-sm">
            The server encountered an error while loading content
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorAxios;