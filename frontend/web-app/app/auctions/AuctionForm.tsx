"use client";

import { Button, TextInput } from "flowbite-react";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";
import DateInput from "../components/DateInput";
import { createAuction, updateAuction } from "../actions/auctionActions";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import { Auction } from "@/types";

type Props = {
  auction?: Auction;
};

export default function AuctionForm({ auction }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const {
    control,
    handleSubmit,
    setFocus,
    reset,
    formState: { isSubmitting, isValid },
  } = useForm({
    mode: "onTouched",
  });

  useEffect(() => {
    if (auction) {
      const { make, model, color, mileage, year } = auction;
      reset({ make, model, color, mileage, year });
    }
    setFocus("make");
  }, [setFocus, reset, auction]);

  async function onSubmit(data: FieldValues) {
    try {
      let id = "";
      let res;
      if (pathname === "/auctions/create") {
        res = await createAuction(data);
        id = res.id;
      } else {
        if (auction) {
          res = await updateAuction(data, auction.id);
          id = auction.id;
        }
      }
      if (res.error) {
        throw res.error;
      }
      router.push(`/auctions/details/${id}`);
    } catch (error: any) {
      toast.error(error.status + " " + error.message);
    }
  }

  return (
    <form className="flex flex-col mt-3" onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Производитель"
        name="make"
        control={control}
        rules={{ required: "Производитель должен быть указан" }}
      />
      <Input
        label="Модель"
        name="model"
        control={control}
        rules={{ required: "Модель должна быть указана" }}
      />
      <Input
        label="Цвет"
        name="color"
        control={control}
        rules={{ required: "Цвет должен быть указан" }}
      />

      <div className="grid grid-cols-2 gap-3">
        <Input
          label="Год"
          name="year"
          control={control}
          type="number"
          rules={{ required: "Год должен быть указан" }}
        />
        <Input
          label="Пробег"
          name="mileage"
          control={control}
          type="number"
          rules={{ required: "Пробег должен быть указан" }}
        />
      </div>

      {pathname === "/auctions/create" && (
        <>
          <Input
            label="URL изображения"
            name="imageUrl"
            control={control}
            rules={{ required: "URL изображения должно быть указано" }}
          />

          <div className="grid grid-cols-2 gap-3">
            <Input
              label="Стартовая цена (введите 0 если нет стартовой цены)"
              name="reservePrice"
              control={control}
              type="number"
              rules={{ required: "Стартовая цена должна быть указана" }}
            />
            <DateInput
              label="Дата окончания аукциона"
              name="auctionEnd"
              control={control}
              dateFormat="dd MMMM yyyy h:mm a"
              showTimeSelect
              rules={{
                required: "Дата окончания аукциона должна быть указана",
              }}
            />
          </div>
        </>
      )}

      <div className="flex justify-between">
        <Button outline color="gray">
          Отмена
        </Button>
        <Button
          isProcessing={isSubmitting}
          disabled={!isValid}
          type="submit"
          outline
          color="success"
        >
          Создать
        </Button>
      </div>
    </form>
  );
}
