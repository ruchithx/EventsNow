import React from "react";

interface Test {
  word: string;
  card: string;
}

export default function Test({ word, card }: Test) {
  return <div className="bg-black">{`hello wolrd ${word} ${card} `}</div>;
}
