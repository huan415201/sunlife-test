import { MOCK_CONVERSATION } from "@/mock";
import type { TMessage } from "@/types";
import { useState } from "react";
import { AssistantChat, Header, LogoutButton } from "./partial";

const HomePage = () => {
  const [conversation, setConversation] =
    useState<TMessage[]>(MOCK_CONVERSATION);

  const resetConversation = () => setConversation(MOCK_CONVERSATION);

  return (
    <div className="flex flex-col h-screen overflow-y-hidden">
      <Header />
      <div className="flex gap-2 bg-background-dark-blue p-4 h-[calc(100%-104px)]">
        <LogoutButton resetConversation={resetConversation} />
        <AssistantChat
          conversation={conversation}
          setConversation={setConversation}
        />
      </div>
    </div>
  );
};

export default HomePage;
