import Image from "next/image";
import { Navbar } from "./components/ui/navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <Navbar />

      <section className="w-full bg-transparent">
        <div className="container px-6 py-16 mx-auto text-center">
          <div className="max-w-lg mx-auto">
            <h1 className="text-3xl font-semibold text-gray-800 lg:text-4xl">
              Building Your Next App with our Awesome components
            </h1>
            <p className="mt-6 text-gray-500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
              similique obcaecati illum mollitia.
            </p>
            <button className="px-5 py-2 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
              Start 14-Day free trial
            </button>
            <p className="mt-3 text-sm text-gray-400 ">
              No credit card required
            </p>
          </div>

          <div className="flex justify-center mt-10">
            <Image
              className="object-cover w-full h-96 rounded-xl lg:w-4/5"
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
              alt=""
              width={100}
              height={100}
            />
          </div>
        </div>
      </section>
    </main>
  );
}