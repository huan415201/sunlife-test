import type { TMessage } from "@/types";

export const MOCK_CONVERSATION: TMessage[] = [
  {
    id: 1,
    content: (
      <p>
        Hi, <span className="font-bold">Rvsxmzrcs Vcllznbxvz</span>. Welcome to
        Sunny (Advisor Assistant) Chatbot ! Please let me know how can I help
        you.
      </p>
    ),
    owner: "assistant",
  },
  {
    id: 2,
    content: (
      <p className="flex flex-col gap-4">
        <span>
          To get the most accurate results, simply start your questions with
        </span>
        <span>
          '<span className="font-bold">Products:</span>' For questions relating
          to the Traditional and VUL product features and Rider,
        </span>
        <span>
          '<span className="font-bold">New Business Processing:</span>' For
          questions relating to underwriting rules & requirements,
        </span>
        <span>
          '<span className="font-bold">Digital:</span>' For questions relating
          to Digital Solutions
        </span>
      </p>
    ),
    owner: "assistant",
  },
  {
    id: 3,
    content: "Please type your question below.",
    owner: "assistant",
  },
];
