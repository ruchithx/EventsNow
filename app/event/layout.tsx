import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event",
  description: "This is the event dashboard page",
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
