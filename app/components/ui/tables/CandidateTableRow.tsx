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
  stateId,
  cid,
  firstlast,
  phone,
  webform,
  website,
  twitter_id,
  youtube_url,
  facebook_id,
}: {
  stateId: string;
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
    <tr>
      <td className="pl-4 pr-12 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center gap-x-3">
          <div className="flex items-center gap-x-2">
            <Image
              width={120}
              height={120}
              className="object-cover w-16 h-16 rounded-full"
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

            <div>
              <h2 className="font-medium text-gray-800">{firstlast}</h2>

              <Link href={source} target="_blank">
                <span className="text-sm font-normal text-gray-600">
                  See More...
                </span>
              </Link>
            </div>
          </div>
        </div>
      </td>

      <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
        <div className="inline-flex items-center px-3 py-1 rounded-full gap-x-2 bg-emerald-100/60">
          <h2 className="text-sm font-normal text-emerald-500">
            {chamber == "H" || chamber == ""
              ? "House of Representatives"
              : chamber == "S"
              ? "Senate"
              : "N/A"}
          </h2>
        </div>
      </td>

      <td className="px-4 py-4 text-sm text-gray-500 whitespace-nowrap">
        {USDollar.format(parseFloat(total))}
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-2 child-hover:scale-105">
          <Link href={`tel:${phone}`}>
            <button className="px-3 py-1 text-xs text-[#D00037] rounded-full bg-[#D00037]/10">
              Phone
            </button>
          </Link>

          <Link href={`${webform}`} target="_blank">
            <button className="px-3 py-1 text-xs text-[#0048A0] rounded-full bg-[#0048A0]/10">
              Contact Form
            </button>
          </Link>

          <Link href={`${website}`} target="_blank">
            <button className="px-3 py-1 text-xs text-[#68246C] rounded-full bg-[#68246C]/10">
              Website
            </button>
          </Link>
        </div>
      </td>

      <td className="px-4 py-4 text-sm whitespace-nowrap">
        <div className="flex items-center gap-x-6 child-hover:scale-125">
          <Link
            href={`https://twitter.com/${twitter_id}`}
            target="_blank"
            className="focus:outline-none"
          >
            <Image src={twitter} alt="" width={40} height={40} />
          </Link>

          <Link
            href={youtube_url}
            target="_blank"
            className="focus:outline-none"
          >
            <Image src={youtube} alt="" width={40} height={40} />
          </Link>

          <Link
            href={`https://www.facebook.com/${facebook_id}`}
            target="_blank"
            className="focus:outline-none"
          >
            <Image src={facebook} alt="" width={40} height={40} />
          </Link>
        </div>
      </td>
    </tr>
  );
}
