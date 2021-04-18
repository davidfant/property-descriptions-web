import React, { FC } from "react";
import { Layout } from "../components/Layout";

const AboutPage: FC = () => (
  <Layout title="About">
    <h1>👋 About</h1>
    <p className="mt-2 text-gray-500">
      Hi, I'm{" "}
      <a href="https://fant.io" target="_blank" rel="noreferrer">
        David Fant
      </a>{" "}
      and I created this tool to explore the power of{" "}
      <a
        href="https://en.wikipedia.org/wiki/GPT-3"
        target="_blank"
        rel="noreferrer"
      >
        GPT-3
      </a>
      , a deep learning model that can write human-like text. This tool should
      be used for informational or entertainment purposes only. It was created
      on a single Saturday as an experiment, and as you can tell by using the
      tool GPT-3 sometimes outputs funny things.
    </p>
  </Layout>
);

export default AboutPage;
