import React from "react";

interface Props {
  children: string;
}

export const Header: React.FC<Props> = ({ children }) => (
  <h1 className="text-xl pb-4">{children}</h1>
);

export const Subheader: React.FC<Props> = ({ children }) => <h2>{children}</h2>;

export const Text: React.FC<Props> = ({ children }) => (
  <p className="leading-loose">{children}</p>
);
