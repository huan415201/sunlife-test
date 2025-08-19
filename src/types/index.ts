import type { JSX } from "react";

export type TMessage = {
  id: number;
  content: JSX.Element | string;
  owner: "assistant" | "user";
};
