import Header from "@/components/Header";
import Contact from "@/components/Contact";

export default function ClientLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <div className="w-full min-h-screen">
        <Header />
        {children}
        <Contact />
      </div>
    </>
  );
}
