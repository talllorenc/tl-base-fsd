import { codeToHtml } from "shiki";
import type { BundledLanguage } from "shiki";
import { transformerNotationHighlight } from "@shikijs/transformers";
import { Check, Copy } from "lucide-react";

interface ICodeWrapperProps {
  code: string;
  fileName?: string;
  lang?: BundledLanguage;
  theme?: "github-dark" | "vitesse-dark" | "dracula" | "nord";
  showCopy?: boolean;
}

const CodeWrapper = async ({
  code,
  fileName,
  lang = "typescript",
  theme = "github-dark",
  showCopy = true,
}: ICodeWrapperProps) => {
  const html = await codeToHtml(code, {
    lang,
    theme,
    transformers: [transformerNotationHighlight()],
  });

  return (
    <div>
      <div className="bg-neutral-800">
        {fileName && (
          <div className="inline-flex bg-neutral-900 px-4 py-2 text-sm">
            {fileName}
          </div>
        )}
      </div>
      <div
        className="[&_.highlighted]:bg-blue-700"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
};

export default CodeWrapper;
