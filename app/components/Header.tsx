import React from "react";
import ZolaLogo from "./ZolaLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <ZolaLogo className="z-40 h-20 cursor-pointer text-sky-800" />
    </header>
  );
}
