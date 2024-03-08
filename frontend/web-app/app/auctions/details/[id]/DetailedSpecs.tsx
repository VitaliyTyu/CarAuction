"use client";

import { Auction } from "@/types";
import { Table } from "flowbite-react";

type Props = {
  auction: Auction;
};
export default function DetailedSpecs({ auction }: Props) {
  return (
    <Table striped={true}>
      <Table.Body className="divide-y">
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Продавец
          </Table.Cell>
          <Table.Cell>{auction.seller}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Производитель
          </Table.Cell>
          <Table.Cell>{auction.make}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Модель
          </Table.Cell>
          <Table.Cell>{auction.model}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Год производства
          </Table.Cell>
          <Table.Cell>{auction.year}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Пробег
          </Table.Cell>
          <Table.Cell>{auction.mileage}</Table.Cell>
        </Table.Row>
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
            Есть ли стартовая цена?
          </Table.Cell>
          <Table.Cell>{auction.reservePrice > 0 ? "Да" : "Нет"}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  );
}
