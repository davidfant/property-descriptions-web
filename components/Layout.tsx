import React, { FC, ReactNode } from "react";
import Head from "next/head";
import Link from "next/link";

interface Props {
  children: ReactNode;
  title: string;
}

export const Layout: FC<Props> = ({ children, title }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <div className="max-w-lg mx-auto px-2 flex justify-end text-gray-500">
        <Link href="/">
          <p className="p-4 cursor-pointer hover:underline">Home</p>
        </Link>
        <Link href="/examples">
          <p className="p-4 cursor-pointer hover:underline">Examples</p>
        </Link>
        <Link href="/about">
          <p className="p-4 cursor-pointer hover:underline">About</p>
        </Link>
      </div>
    </header>
    <div className="max-w-lg mx-auto py-8 px-2">{children}</div>
  </div>
);
