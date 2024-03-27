import { USMap } from "./components/US-Map";

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen">
      <section className="container px-8 py-16 md:py-20">
        <div className="mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
              Choose Your Government By Following The Money
            </h1>
            <p className="mt-6 text-gray-500">
              {`It's not enough for our elected officials to tell us how they can help us. They also need to put their money where their mouth is! Learn more by clicking your state below and see if your representatives' values stack up to their wallets.`}
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <USMap />
          </div>
        </div>
      </section>
    </main>
  );
}
