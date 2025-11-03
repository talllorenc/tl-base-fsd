export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex items-center justify-center flex-1 min-h-screen container">
      <div className="max-w-md w-full px-4">
        {children}
      </div>
    </main>
  );
}
