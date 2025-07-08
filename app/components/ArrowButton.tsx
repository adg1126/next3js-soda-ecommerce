import React from "react";

type Props = {
  direction?: "left" | "right";
  label?: string;
  handleChangeFlavor: () => void;
};

export default function ArrowButton({
  direction = "right",
  label,
  handleChangeFlavor,
}: Props) {
  return (
    <button
      className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20"
      onClick={() => handleChangeFlavor()}
    >
      {direction === "left" ? (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 52 52">
          <path
            fill="currentColor"
            d="M9 25.7c0 1.1.6 2.2 1.1 2.8l18.6 18.6a4.4 4.4 0 006.2 0 4.4 4.4 0 000-6.2L19.7 25.7 35 10.5a4.4 4.4 0 000-6.2 4.4 4.4 0 00-6.2 0l-18 18C9.6 23.4 9 24.6 9 25.7z"
          />
        </svg>
      ) : (
        <svg
          className="-scale-x-100"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 52 52"
        >
          <path
            fill="currentColor"
            d="M9 25.7c0 1.1.6 2.2 1.1 2.8l18.6 18.6a4.4 4.4 0 006.2 0 4.4 4.4 0 000-6.2L19.7 25.7 35 10.5a4.4 4.4 0 000-6.2 4.4 4.4 0 00-6.2 0l-18 18C9.6 23.4 9 24.6 9 25.7z"
          />
        </svg>
      )}
      <span className="sr-only">{label}</span>
    </button>
  );
}
