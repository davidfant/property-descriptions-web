import React, { FC, useCallback } from "react";

const Themes = {
  blue: "bg-blue-200 text-blue-600 border-blue-200",
  indigo: "bg-indigo-200 text-indigo-600 border-indigo-200",
  green: "bg-green-200 text-green-600 border-green-200",
  yellow: "bg-yellow-200 text-yellow-600 border-yellow-200",
  pink: "bg-pink-200 text-pink-600 border-pink-200",
  purple: "bg-purple-200 text-purple-600 border-purple-200",
};

export type TagColor = keyof typeof Themes;

interface Props {
  label: string;
  color: TagColor;
  selected: boolean;
  className?: string;
  onPress(label: string): void;
}

export const Tag: FC<Props> = ({
  label,
  selected,
  color,
  className = "",
  onPress,
}) => {
  const coloring = selected
    ? Themes[color]
    : "bg-white text-gray-400 border-gray-200 hover:border-gray-300";
  return (
    <div
      onClick={useCallback(() => onPress(label), [onPress, label])}
      className={`text-sm inline-flex items-center font-bold leading-sm uppercase px-3 py-1 mb-2 rounded-full cursor-pointer animate-transitions outline-none focus:outline-none border-2 ${coloring} ${className}`}
      // active:transform active:scale-95
    >
      <svg
        className={`mr-2 w-4 h-4 animate-transitions ${
          selected ? "" : "transform rotate-45"
        }`}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.5"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
      <span>{label}</span>
    </div>
  );
};
