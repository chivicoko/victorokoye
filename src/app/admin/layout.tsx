import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";


export const metadata = {
  title: "Admin Panel",
  description: "This is the admin panel of Victor Okoye's portfolio website for the management",
}

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <div className="relative flex bg-gray-100">
      <ClientLayout>{children}</ClientLayout>
    </div>
  );
}
