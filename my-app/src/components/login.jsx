import React from "react";

export const Button = () => {
  return (
    <button
      className="all-[unset] box-border flex w-[410px] h-10 items-center justify-center gap-2 px-4 py-0 relative bg-black rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
      type="button"
      aria-label="Login button"
    >
      <span className="relative flex items-center justify-center w-fit font-small-text font-[number:var(--small-text-font-weight)] text-white text-[length:var(--small-text-font-size)] tracking-[var(--small-text-letter-spacing)] leading-[var(--small-text-line-height)] whitespace-nowrap [font-style:var(--small-text-font-style)]">
        Login
      </span>
    </button>
  );
};