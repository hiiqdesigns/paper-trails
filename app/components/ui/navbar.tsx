"use client";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className={`relative shadow`}>
      <div className="container px-8 py-3 mx-auto flex">
        <div className="flex items-center justify-between">
          <Link href={`/`} className="flex gap-2">
            <Image
              className="w-auto h-6 sm:h-7"
              src="/paper-trail-logo.png"
              alt="Paper Trails Logo"
              width={100}
              height={60}
            />
            Paper Trails
          </Link>
        </div>

        <Link href={`https://www.vote.org`} target="_blank" className="ml-auto">
          <button className="px-10 py-2 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600 rounded-lg hover:bg-blue-500 lg:mx-0 lg:w-auto focus:outline-none">
            Go Vote!
          </button>
        </Link>
      </div>
    </nav>
  );
};
