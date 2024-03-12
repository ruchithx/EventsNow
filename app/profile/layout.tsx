import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
  description: "this is the profile  page",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main>
        <link rel="icon" href="/reusableComponents/nav-logo.png" sizes="any" />

        {children}
      </main>
    </>
  );
}
