"use client";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className={`relative border-t-2`}>
      <div className="container px-8 py-6 mx-auto flex">
        <div className="flex items-center justify-between">
          <Link
            href={`https://github.com/hiiqdesigns/paper-trails`}
            target="_blank"
            className="flex items-center gap-2"
          >
            <Image
              src={"/GitHub.png"}
              width={40}
              height={40}
              alt="Github Logo"
            />
            Github
          </Link>
        </div>
      </div>
    </footer>
  );
};
