import type { TMessage } from "@/types";
import { useEffect, useRef, useState, type FC } from "react";
import { HiMiniPlay } from "react-icons/hi2";
import { Message } from "./partial";

type TAssistantChatProps = {
  conversation: TMessage[];
  setConversation: React.Dispatch<React.SetStateAction<TMessage[]>>;
};

const AssistantChat: FC<TAssistantChatProps> = ({
  conversation,
  setConversation,
}) => {
  const [inputMessage, setInputMessage] = useState("");
  const conversationContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (conversationContainerRef.current) {
      conversationContainerRef.current.scrollTop =
        conversationContainerRef.current.scrollHeight;
    }
  }, [conversation]);

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);
  };

  const enterMessage = (text: string) => {
    setConversation((prev) => [
      ...prev,
      {
        id: prev[prev.length - 1].id + 1,
        content: text,
        owner: "user",
      },
    ]);
  };

  const checkMessage = (text: string) => {
    if (inputMessage.trim()) {
      enterMessage(text);
      setInputMessage("");
    }
  };

  const checkEnterPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") send();
  };

  const send = () => checkMessage(inputMessage);

  const renderMessage = (message: TMessage) => (
    <Message key={message.id} data={message} />
  );

  return (
    <div className="flex flex-col flex-1 p-3 rounded-2xl bg-secondary">
      <div
        className="flex flex-col gap-4 overflow-y-auto flex-1"
        ref={conversationContainerRef}
      >
        {conversation.map(renderMessage)}
      </div>
      <div className="flex items-center gap-2 mt-4">
        <input
          type="text"
          placeholder="Type your question here. Please avoid use of any sensitive or personally identifiable information."
          className="rounded-full bg-white px-3 py-3 border-2 border-black text-sm flex-1"
          onChange={onInputChange}
          onKeyUp={checkEnterPress}
          value={inputMessage}
        />
        <button
          onClick={send}
          className="pl-2.5 pr-2 py-2.5 bg-primary rounded-sm cursor-pointer"
        >
          <HiMiniPlay />
        </button>
      </div>
    </div>
  );
};

export default AssistantChat;
