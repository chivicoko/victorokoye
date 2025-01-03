// layout.tsx (Server Component)

import ClientLayout from "./ClientLayout";
import "./globals.css";
import { Maven_Pro, Signika_Negative, Ubuntu } from 'next/font/google';

const mavenPro = Maven_Pro({ subsets: ['latin'], weight: ['400', '900'], variable: '--font-maven-pro' });
const signikaNegative = Signika_Negative({ subsets: ['latin'], weight: ['300', '700'], variable: '--font-signika-negative' });
const ubuntu = Ubuntu({ subsets: ['latin'], weight: ['300', '700'], variable: '--font-ubuntu' });

// Set global metadata
export const metadata = {
  title: {
    default: "Victor Okoye | Software Engineer",
    template: "%s | Victor Okoye"
  },
  description: "This is the portfolio website of the Software Engineer, Victor Okoye. Here you can find more information about Victor Okoye's software engineering career.",
  keywords: "Portfolio, Software Engineer, programmer, project, skills, Resume, Certificate, Victor, Okoye",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${mavenPro.variable} ${signikaNegative.variable} ${ubuntu.variable}`}>
      <body className="relative flex flex-col bg-white dark:bg-neutral-600">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
