import logo from "@/assets/logo.svg";
import type { FC, PropsWithChildren } from "react";
import MessageBody from "../MessageBody";

const AssistantMessage: FC<PropsWithChildren> = ({ children }) => (
  <div className="flex items-start gap-2">
    <img src={logo} className="rounded-full w-6 h-6 mt-1" />
    <MessageBody>{children}</MessageBody>
  </div>
);

export default AssistantMessage;
