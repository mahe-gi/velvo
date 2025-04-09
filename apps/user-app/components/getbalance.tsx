"use client";
import {} from "@repo/store/useBalance";

export default function () {
  const balance = useBalance();
  return <div>hi there {balance}</div>;
}
s;
