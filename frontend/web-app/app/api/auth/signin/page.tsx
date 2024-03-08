import EmptyFilter from "@/app/components/EmptyFilter";
import React from "react";

export default function Page({
  searchParams,
}: {
  searchParams: { callbackUrl: string };
}) {
  return (
    <EmptyFilter
      title="Войдите, чтобы выполнить действие"
      subtitle="Нажимите ниже, чтобы войти"
      showLogin
      callbackUrl={searchParams.callbackUrl}
    />
  );
}
