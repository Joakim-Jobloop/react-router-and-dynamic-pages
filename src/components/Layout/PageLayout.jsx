export default function PageLayout({ children }) {
  return (
    <main className="min-h-[100vh] flex flex-col justify-center">
      {children}
    </main>
  );
}
