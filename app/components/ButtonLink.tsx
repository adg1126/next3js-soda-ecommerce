import clsx from "clsx";
import Link from "next/link";

type Props = {
  url: string;
  text: string;
  className?: string;
};

export default function ButtonLink({ url, text, className }: Props) {
  return (
    <Link href={url}>
      <button
        className={clsx(
          "rounded-xl bg-orange-600 px-5 py-4 text-center text-xl font-bold uppercase tracking-wide text-white transition-colors duration-150 hover:bg-orange-700 md:text-2xl",
          className,
        )}
      >
        {text}
      </button>
    </Link>
  );
}
