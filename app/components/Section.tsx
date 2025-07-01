import clsx from "clsx";
import { ReactNode } from "react";

type Props = { className?: string; children: ReactNode };

export default function Section({ className, children }: Props) {
  return (
    <div className={clsx("px-4 first:pt-10 md:px-6", className)}>
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center">
        {children}
      </div>
    </div>
  );
}
