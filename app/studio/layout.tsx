import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Sanity Studio",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      nosnippet: true,
    },
  },
};

export default function StudioLayout({ children }: { children: ReactNode }) {
  return <div className="fixed inset-0 z-50 bg-white">{children}</div>;
}
