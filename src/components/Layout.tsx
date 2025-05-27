import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className="bg-slate-900 text-white">
      <div className="flex flex-col max-w-7xl mx-auto h-screen">
        <Navbar />
        {children}
        <Footer />
      </div>
    </main>
  );
}
