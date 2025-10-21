import { Roboto } from "next/font/google";
import "./styles/globals.css";
import { ToastContainer } from "react-toastify";
import NextTopLoader from "nextjs-toploader";
import ThemeProvider from "./providers/ThemeProvider";
import QueryProvider from "./providers/QueryProvider";
import { AuthProvider } from "./providers/AuthProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  style: ["normal", "italic"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${roboto.className}`}>
        <ThemeProvider>
          <QueryProvider>
            <AuthProvider user={null}>
              <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick={false}
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <NextTopLoader
                color="#cc2936"
                initialPosition={0.08}
                crawlSpeed={200}
                height={3}
                crawl={true}
                showSpinner={false}
                easing="ease"
                speed={200}
                shadow="0 0 10px #cc2936,0 0 5px #cc2936"
              />
              {children}
            </AuthProvider>
          </QueryProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
