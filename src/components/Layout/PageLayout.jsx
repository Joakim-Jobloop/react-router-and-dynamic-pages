export default function PageLayout({ children }) {
  return (
    <main className="min-h-[100vh] flex flex-col justify-center max-w-5xl px-2 sm:px-6 md:px-8 lg:px-16 mx-auto my-12 md:my-24 gap-12">
      {children}
    </main>
  );
}
