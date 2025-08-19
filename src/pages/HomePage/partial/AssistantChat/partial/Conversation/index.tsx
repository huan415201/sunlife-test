import type { TMessage } from "@/types";
import type { FC } from "react";
import { AssistantMessage, UserMessage } from "./partial";

type TMessageProps = {
  data: TMessage;
};

const Message: FC<TMessageProps> = ({ data }) => {
  const Wrapper = data.owner === "assistant" ? AssistantMessage : UserMessage;
  return <Wrapper>{data.content}</Wrapper>;
};

export default Message;
