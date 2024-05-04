import { ReactNode, Suspense } from "react";
import Loading from "./loading";

export default function StateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <main className="flex flex-col items-center min-h-screen">
          <section className="container px-8 py-6 md:py-12">{children}</section>
        </main>
      </Suspense>
    </>
  );
}
