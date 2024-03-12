import { Metadata } from "next";

export const metadata: Metadata = {
  title: "organization",
  description: "this is the organization dashboard page",
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
