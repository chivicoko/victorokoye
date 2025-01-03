import { ReactNode } from "react";
import ClientLayout from "./ClientLayout";


export const metadata = {
  title: "Projects page",
  description: "Here are some of the latest projects that Victor Okoye worked on.",
}

export default function Layout({ children }: { children: ReactNode }) {

  return (
    <div className="relative flex dark:bg-neutral-800">
      <ClientLayout>{children}</ClientLayout>
    </div>
  );
}
