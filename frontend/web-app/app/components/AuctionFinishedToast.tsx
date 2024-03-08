import { Auction, AuctionFinished } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { numberWithCommas } from "../lib/numberWithComma";

type Props = {
  finishedAuction: AuctionFinished;
  auction: Auction;
};

export default function AuctionFinishedToast({
  auction,
  finishedAuction,
}: Props) {
  return (
    <Link
      href={`/auctions/details/${auction.id}`}
      className="flex flex-col items-center"
    >
      <div className="flex flex-row items-center gap-2">
        <Image
          src={auction.imageUrl}
          alt="image"
          height={80}
          width={80}
          className="rounded-lg w-auto h-auto"
        />
        <div className="flex flex-col">
          <span>
            Аукцион для {auction.make} {auction.model} завершен
          </span>
          {finishedAuction.itemSold && finishedAuction.amount ? (
            <p>
              Поздравляем {finishedAuction.winner} с победой в аукционе ₽₽
              {numberWithCommas(finishedAuction.amount)}
            </p>
          ) : (
            <p>Этот предмет не продается</p>
          )}
        </div>
      </div>
    </Link>
  );
}
