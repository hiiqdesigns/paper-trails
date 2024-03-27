import Image from "next/image";
import Link from "next/link";
import { getCandData } from "@/utils/getOpenSecretsData";

import twitter from "/public/twitter.svg";
import youtube from "/public/youtube.svg";
import facebook from "/public/facebook.svg";
import blueUserIcon from "/public/blue-user-icon.png";
import redUserIcon from "/public/red-user-icon.png";
import userIcon from "/public/user-icon.png";

export default async function CandidateTableRow({
  cid,
  firstlast,
  phone,
  webform,
  website,
  twitter_id,
  youtube_url,
  facebook_id,
}: {
  cid: string;
  firstlast: string;
  phone: string;
  webform: string;
  website: string;
  twitter_id: string;
  youtube_url: string;
  facebook_id: string;
}) {
  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const cand = await getCandData(cid);
  const candData = cand.response.summary["@attributes"];
  const { chamber, total, source, party } = candData;

  const imageLink = `https://cdn1.opensecrets.org/congress-members/photos/${cid}.jpg`;
  const image = await fetch(imageLink);

  return (
    <tr
      className={`flex items-center w-full bg-white hover:bg-gradient-to-r hover:to-70% ${
        party == "D"
          ? "hover:from-[#0048A0]/20"
          : party == "R"
          ? "hover:from-[#D00037]/20"
          : "hover:from-[#68246C]/20"
      }`}
    >
      <td className="w-1/5 px-4 py-4 text-sm font-medium text-gray-700">
        <div className="flex items-center gap-x-2">
          <Image
            width={80}
            height={80}
            className="object-cover max-w-[80px] max-h-[80px] rounded-full"
            src={
              image.ok
                ? imageLink
                : party == "D"
                ? blueUserIcon
                : party == "R"
                ? redUserIcon
                : userIcon
            }
            alt=""
          />
          <div className="flex flex-col">
            <h2 className="text-base font-medium text-gray-800">{firstlast}</h2>

            <span className="text-sm font-normal text-gray-600">
              {party == "D"
                ? "Democrat"
                : party == "R"
                ? "Republican"
                : "Other"}
            </span>

            <Link
              href={source}
              target="_blank"
              className="group/candLink flex gap-1 items-center h-6 mt-1"
            >
              <div className="flex flex-col">
                <span className="text-sm font-normal leading-none text-gray-600">
                  See More
                </span>
                <div className="h-[0.094rem] bg-black rounded-full w-0 group-hover/candLink:w-full transition-[width] duration-500"></div>
              </div>

              <div className="flex items-center">
                <div className="w-[0.75rem]">
                  <div className="bg-black h-[0.09rem] rounded-full w-0 group-hover/candLink:w-[0.75rem] transition-[width] duration-700"></div>
                </div>
                <div className="-ml-[0.5rem] w-[0.5rem] h-[0.5rem] -rotate-45 border-r-[0.09rem] border-b-[0.09rem] border-black"></div>
              </div>
            </Link>
          </div>
        </div>
      </td>

      <td className="w-1/5 px-4 py-4">
        <div className="inline-flex justify-center items-center px-3 py-1 rounded-full bg-emerald-100/60">
          <span className="text-xs font-normal text-center text-emerald-800">
            {chamber == "H" || chamber == ""
              ? "House of Representatives"
              : chamber == "S"
              ? "Senate"
              : "N/A"}
          </span>
        </div>
      </td>

      <td className="w-1/5 px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        <span>{USDollar.format(parseFloat(total))}</span>
      </td>

      <td className="flex justify-between w-2/5 px-4 py-4 text-xs whitespace-nowrap">
        <div className="flex items-center gap-x-2 child-hover:scale-105">
          {phone && (
            <Link href={`tel:${phone}`}>
              <button className="px-3 py-1 text-[#D00037] rounded-full bg-[#D00037]/10">
                Phone
              </button>
            </Link>
          )}

          {webform && (
            <Link href={`${webform}`} target="_blank">
              <button className="px-3 py-1 text-[#0048A0] rounded-full bg-[#0048A0]/10">
                Contact Form
              </button>
            </Link>
          )}

          {website && (
            <Link href={`${website}`} target="_blank">
              <button className="px-3 py-1 text-[#68246C] rounded-full bg-[#68246C]/10">
                Website
              </button>
            </Link>
          )}
        </div>

        <div className="flex items-center gap-x-4 child-hover:scale-125">
          {twitter_id && (
            <Link
              href={`https://twitter.com/${twitter_id}`}
              target="_blank"
              className="focus:outline-none"
            >
              <Image
                src={twitter}
                alt=""
                width={40}
                height={40}
                className="max-w-[40px] max-h-[40px]"
              />
            </Link>
          )}

          {youtube_url && (
            <Link
              href={youtube_url}
              target="_blank"
              className="focus:outline-none"
            >
              <Image
                src={youtube}
                alt=""
                width={40}
                height={40}
                className="max-w-[40px] max-h-[40px]"
              />
            </Link>
          )}

          {facebook_id && (
            <Link
              href={`https://www.facebook.com/${facebook_id}`}
              target="_blank"
              className="focus:outline-none"
            >
              <Image
                src={facebook}
                alt=""
                width={40}
                height={40}
                className="max-w-[40px] max-h-[40px]"
              />
            </Link>
          )}
        </div>
      </td>

      {/* <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-4 child-hover:scale-125">
          {twitter_id && (
            <Link
              href={`https://twitter.com/${twitter_id}`}
              target="_blank"
              className="focus:outline-none"
            >
              <Image
                src={twitter}
                alt=""
                width={40}
                height={40}
                className="max-w-[40px] max-h-[40px]"
              />
            </Link>
          )}

          {youtube_url && (
            <Link
              href={youtube_url}
              target="_blank"
              className="focus:outline-none"
            >
              <Image
                src={youtube}
                alt=""
                width={40}
                height={40}
                className="max-w-[40px] max-h-[40px]"
              />
            </Link>
          )}

          {facebook_id && (
            <Link
              href={`https://www.facebook.com/${facebook_id}`}
              target="_blank"
              className="focus:outline-none"
            >
              <Image
                src={facebook}
                alt=""
                width={40}
                height={40}
                className="max-w-[40px] max-h-[40px]"
              />
            </Link>
          )}
        </div>
      </td> */}
    </tr>
  );
}
