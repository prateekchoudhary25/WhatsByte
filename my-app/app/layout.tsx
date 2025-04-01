import "./globals.css";
import { Metadata } from "next";
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Student Dashboard | Whatbytes",
  description: "Dashboard for students of Whatbytes",
  icons: {
    icon: "/icons/logo.png",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
