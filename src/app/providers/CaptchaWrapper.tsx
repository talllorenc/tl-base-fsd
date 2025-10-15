"use client";
import { ReactNode } from "react";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export default function CaptchaWrapper({ children }: { children: ReactNode }) {
  const recaptchaKey: string | undefined =
    process?.env?.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={recaptchaKey || "Not Defined"}
      scriptProps={{
        async: true,
        defer: true,
        appendTo: "head",
        nonce: undefined,
      }}
      container={{
        parameters: {
          badge: "bottomleft",
          theme: "dark",
        },
      }}
    >
      {children}
    </GoogleReCaptchaProvider>
  );
}
