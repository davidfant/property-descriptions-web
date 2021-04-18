import React, { FC } from "react";

interface Props {
  className?: string;
}

export const About: FC<Props> = ({ className }) => (
  <div className={className}>
    <h1 className="mt-20">👋 About</h1>
    <p className="mt-2 text-gray-500">
      Hi, I'm David and I created this tool to explore the power of{" "}
      <a
        href="https://en.wikipedia.org/wiki/GPT-3"
        target="_blank"
        rel="noreferrer"
        className="font-bold text-blue-500"
      >
        GPT-3, a deep learning model that can write human-like text
      </a>
      . Bla Bla...
    </p>
  </div>
);
